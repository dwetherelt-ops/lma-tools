import type { OnboardingData } from "../../actions/onboarding";

interface Props {
  data: OnboardingData;
  onChange: (updates: Partial<OnboardingData>) => void;
}

const identityOptions = [
  {
    value: "pseudonym",
    label: "Use a chosen name",
    description:
      "Pick any display name you like. Your real name and email stay private.",
  },
  {
    value: "real_name",
    label: "Use my real name",
    description:
      "Your display name will be your real name. Email is still private.",
  },
];

export function StepBasicProfile({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-navy-900">
        Your community identity
      </h2>
      <p className="mt-1 text-sm text-navy-500">
        Choose how you appear to other members. Your email is never shown publicly.
      </p>

      <div className="mt-6 space-y-6">
        {/* Identity mode */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-navy-900">
            How would you like to be known?
          </label>
          <div className="space-y-2">
            {identityOptions.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer rounded-xl border p-3.5 transition-colors ${
                  data.identityMode === option.value
                    ? "border-teal-500 bg-teal-50"
                    : "border-navy-100 hover:border-navy-200"
                }`}
              >
                <input
                  type="radio"
                  name="identityMode"
                  value={option.value}
                  checked={data.identityMode === option.value}
                  onChange={(e) => onChange({ identityMode: e.target.value })}
                  className="mt-0.5 accent-teal-600"
                />
                <div className="ml-3">
                  <span className="text-sm font-medium text-navy-900">
                    {option.label}
                  </span>
                  <p className="mt-0.5 text-xs text-navy-500">
                    {option.description}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Display name */}
        <div className="space-y-2">
          <label
            htmlFor="displayName"
            className="text-sm font-medium text-navy-900"
          >
            Display name <span className="text-red-500">*</span>
          </label>
          <input
            id="displayName"
            type="text"
            required
            value={data.displayName}
            onChange={(e) => onChange({ displayName: e.target.value })}
            placeholder={
              data.identityMode === "pseudonym"
                ? "Pick a name — get creative!"
                : "Your name as you'd like it shown"
            }
            className="flex h-10 w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          />
          <p className="text-xs text-navy-400">
            This is the only name other members will see.
            {data.identityMode === "pseudonym" &&
              " Moderators can still see your account for safety purposes."}
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <label htmlFor="bio" className="text-sm font-medium text-navy-900">
            About you
          </label>
          <textarea
            id="bio"
            value={data.bio}
            onChange={(e) => onChange({ bio: e.target.value })}
            placeholder="A few words about yourself — whatever you're comfortable sharing"
            rows={3}
            className="flex w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="text-sm font-medium text-navy-900"
          >
            General location
          </label>
          <input
            id="location"
            type="text"
            value={data.locationGeneral}
            onChange={(e) => onChange({ locationGeneral: e.target.value })}
            placeholder="e.g. London, UK or Pacific Northwest"
            className="flex h-10 w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          />
          <p className="text-xs text-navy-400">
            As vague or specific as you like. You can hide this in privacy settings.
          </p>
        </div>
      </div>
    </div>
  );
}
