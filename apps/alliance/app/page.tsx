import { Hero } from "../components/sections/Hero";
import { AuthorityBand } from "../components/sections/AuthorityBand";
import { SoundFamiliar } from "../components/sections/SoundFamiliar";
import { Recovery } from "../components/sections/Recovery";
import { WhyDifferent } from "../components/sections/WhyDifferent";
import { CommunityVoices } from "../components/sections/CommunityVoices";
import { NotAlone } from "../components/sections/NotAlone";
import { Mission } from "../components/sections/Mission";
import { Pillars } from "../components/sections/Pillars";
import { Founder } from "../components/sections/Founder";
import { WhereToStart } from "../components/sections/WhereToStart";
import { Reframe } from "../components/sections/Reframe";
import { CommunityInvite } from "../components/sections/CommunityInvite";
import { Newsletter } from "../components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AuthorityBand />
      <SoundFamiliar />
      <Recovery />
      <WhyDifferent />
      <CommunityVoices />
      <NotAlone />
      <Mission />
      <Pillars />
      <Founder />
      <WhereToStart />
      <Reframe />
      <CommunityInvite />
      <Newsletter />
    </>
  );
}
