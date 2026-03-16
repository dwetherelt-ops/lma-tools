import type { OnboardingData } from "../../actions/onboarding";

interface Props {
  data: OnboardingData;
  onChange: (updates: Partial<OnboardingData>) => void;
}

const visibilityOptions = [
  {
    value: "public",
    label: "Public",
    description: "Anyone can see your profile, including non-members.",
  },
  {
    value: "members_only",
    label: "Members only",
    description: "Only signed-in community members can see your profile.",
  },
  {
    value: "connections_only",
    label: "Connections only",
    description: "Only people you've connected with can see your full profile.",
  },
  {
    value: "private",
    label: "Private",
    description: "Your profile is hidden. Only your display name is visible.",
  },
];

function Toggle({
  id,
  label,
  description,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-start justify-between gap-4 cursor-pointer"
    >
      <div>
        <span className="text-sm font-medium text-navy-900">{label}</span>
        <p className="text-xs text-navy-500">{description}</p>
      </div>
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative mt-0.5 inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-teal-600" : "bg-navy-200"
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}

export function StepPrivacy({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-navy-900">
        Privacy settings
      </h2>
      <p className="mt-1 text-sm text-navy-500">
        Choose who can see your profile and what&apos;s visible. You can change any of this later.
      </p>

      {/* Profile visibility */}
      <div className="mt-6 space-y-3">
        <label className="text-sm font-medium text-navy-900">
          Profile visibility
        </label>
        {visibilityOptions.map((option) => (
          <label
            key={option.value}
            className={`flex cursor-pointer rounded-xl border p-4 transition-colors ${
              data.visibilityLevel === option.value
                ? "border-teal-500 bg-teal-50"
                : "border-navy-100 hover:border-navy-200"
            }`}
          >
            <input
              type="radio"
              name="visibilityLevel"
              value={option.value}
              checked={data.visibilityLevel === option.value}
              onChange={(e) => onChange({ visibilityLevel: e.target.value })}
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

      {/* Granular visibility toggles */}
      <div className="mt-8 space-y-5 rounded-xl border border-navy-100 p-4">
        <p className="text-sm font-medium text-navy-900">
          What&apos;s visible on your profile
        </p>

        <Toggle
          id="showLocation"
          label="Show location"
          description="Let other members see your general location"
          checked={data.showLocation}
          onChange={(showLocation) => onChange({ showLocation })}
        />

        <Toggle
          id="showNeurotype"
          label="Show neurotype"
          description="Let other members see your neurotype on your profile"
          checked={data.showNeurotype}
          onChange={(showNeurotype) => onChange({ showNeurotype })}
        />

        <Toggle
          id="allowPrivateMessages"
          label="Allow private messages"
          description="Let other members send you direct messages"
          checked={data.allowPrivateMessages}
          onChange={(allowPrivateMessages) => onChange({ allowPrivateMessages })}
        />
      </div>

      {/* Safety note */}
      <div className="mt-6 rounded-xl bg-navy-50 border border-navy-100 p-4">
        <p className="text-xs leading-5 text-navy-600">
          Your email and real name are <strong>never</strong> shown to other
          members. Health-related data (burnout level, sensory notes) is always
          private. Moderators and admins can review accounts for safety and
          moderation purposes.
        </p>
      </div>
    </div>
  );
}
