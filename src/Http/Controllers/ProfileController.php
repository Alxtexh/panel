<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

/**
 * The account's own name and email address.
 *
 * SEPARATE FROM SECURITY ON PURPOSE. Changing your display name is routine;
 * changing what can get into the account is not, and the second screen asks for
 * the current password before it will do anything. Putting them together would
 * either gate the routine thing behind a password prompt or leave the serious
 * one ungated.
 *
 * NOTHING ABOUT GETTING INTO THE ACCOUNT LIVES HERE, two-factor included -
 * that used to be reported (not managed) on this screen too, which read as
 * the same section shown twice once both screens got their own bordered
 * cards. Security is the one and only place for it now.
 */
final class ProfileController
{
    public function edit(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('settings/Profile', [
            'mustVerifyEmail' => $user instanceof MustVerifyEmail,
            'status' => $request->session()->get('status'),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                /*
                 * UNIQUE AGAINST THE CONFIGURED USER TABLE, ignoring this row.
                 * Read from the model rather than hardcoded as `users`, because
                 * an application that renamed it would otherwise get a rule
                 * pointing at a table that is not there - and the failure is a
                 * 500 on save, after the person has typed everything in.
                 */
                Rule::unique($user->getTable(), 'email')->ignore($user->getKey()),
            ],
        ]);

        $user->fill($validated);

        /*
         * A CHANGED ADDRESS IS AN UNVERIFIED ADDRESS. Keeping the old
         * verification would let somebody move the account to a mailbox they
         * control and inherit the trust the previous one had earned - which is
         * exactly the path a password reset takes.
         */
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Profile updated.')]);

        return back();
    }

    /**
     * Close the account.
     *
     * THE PASSWORD IS REQUIRED and the session is destroyed before the row is.
     * Deleting the user first leaves a request holding a session that points at
     * nothing, and the next thing to touch `$request->user()` gets null in a
     * place that has never had to consider it.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate(['password' => ['required', 'current_password']]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
