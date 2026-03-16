export function StepWelcome({ userEmail }: { userEmail: string }) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-navy-900">
        Welcome to Like Minds
      </h1>
      <p className="mt-2 text-sm text-navy-500">
        Signed in as {userEmail}
      </p>

      <div className="mt-6 space-y-4 text-sm leading-6 text-navy-600">
        <p>
          We&apos;re glad you&apos;re here. Before you dive in, we&apos;ll walk
          you through setting up your profile. This helps us connect you with
          the right people and resources.
        </p>

        <div className="rounded-xl bg-teal-50 border border-teal-100 p-4">
          <h3 className="font-semibold text-navy-900">
            What your profile is for
          </h3>
          <ul className="mt-2 space-y-1.5 text-navy-600">
            <li>• Find people with similar experiences and interests</li>
            <li>• Get recommendations tailored to your needs</li>
            <li>• Help others understand how best to support you</li>
          </ul>
        </div>

        <div className="rounded-xl bg-navy-50 border border-navy-100 p-4">
          <h3 className="font-semibold text-navy-900">
            Your privacy matters
          </h3>
          <ul className="mt-2 space-y-1.5 text-navy-600">
            <li>• Use your real name or a chosen display name — it&apos;s up to you</li>
            <li>• Your email is <strong>never</strong> shown to other members</li>
            <li>• You control what&apos;s visible on your profile</li>
            <li>• Everything is optional except your display name</li>
            <li>• Moderators can review accounts for community safety</li>
            <li>• You can change any of this later in settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
