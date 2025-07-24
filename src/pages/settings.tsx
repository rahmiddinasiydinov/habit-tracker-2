import PageHeading from "@/shared/components/page-heading"
import { ModeToggle } from "@/shared/theme/mode-toggle"

export default function SettingsPage() {
  return (
    <>
      <PageHeading>Settings</PageHeading>
      <p className="mt-3 md:mt-8 text-primary text-lg">Theme: <ModeToggle /></p>
      <p className="mt-4 text-5xl md:text-8xl">🚧</p>
    </>
  )
}
