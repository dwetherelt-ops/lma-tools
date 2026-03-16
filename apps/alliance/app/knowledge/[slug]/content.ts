/**
 * Article content keyed by slug.
 * Each entry is an array of content blocks that the article page renders.
 *
 * Block types:
 * - heading: rendered as <h2>
 * - paragraph: rendered as <p>
 * - list: rendered as <ul> with bullet items
 * - callout: rendered as a teal-tinted highlight box
 * - references: rendered as a reference list at the bottom
 */

export interface ContentBlock {
  type: "heading" | "paragraph" | "list" | "callout" | "references";
  text?: string;
  items?: string[];
}

export const articleContent: Record<string, ContentBlock[]> = {
  "why-burnout-hits-neurodivergent-adults-differently": [
    {
      type: "heading",
      text: "You are not just tired",
    },
    {
      type: "paragraph",
      text: "If you are neurodivergent and burned out, you have probably heard the standard advice. Sleep more. Set boundaries. Take a holiday. And you have probably noticed that none of it works, at least not for long.",
    },
    {
      type: "paragraph",
      text: "That is because neurodivergent burnout is not the same thing as being overworked. It is a specific kind of exhaustion that comes from spending years operating in environments, relationships, and systems that were not designed for how your brain works. The fatigue runs deeper than a bad week. It builds over months and years, and it does not go away with rest alone.",
    },
    {
      type: "heading",
      text: "What the research says",
    },
    {
      type: "paragraph",
      text: "In 2020, a team led by Dora Raymaker published the first formal academic study of autistic burnout. They found three defining features: chronic exhaustion, loss of previously held skills, and reduced tolerance to sensory input. Crucially, they found that autistic burnout was distinct from clinical depression, even though the two can overlap.",
    },
    {
      type: "paragraph",
      text: "For ADHD, the research tells a parallel story. A 2022 systematic review in BMC Psychiatry confirmed that adults with ADHD experience significantly higher rates of occupational burnout. The strongest predictors were executive function demands, emotional dysregulation, and being in environments that required sustained focus without adequate support.",
    },
    {
      type: "heading",
      text: "The masking tax",
    },
    {
      type: "paragraph",
      text: "One of the biggest drivers of neurodivergent burnout is masking: the conscious or unconscious effort to appear neurotypical. Masking includes forcing eye contact, suppressing stimming, monitoring your tone and facial expressions, and constantly translating between how your brain works and how others expect you to behave.",
    },
    {
      type: "paragraph",
      text: "A 2017 review by Laura Hull and colleagues found that sustained masking is linked to exhaustion, anxiety, depression, and a gradual loss of identity. Many autistic adults described feeling like they no longer knew who they were underneath the performance.",
    },
    {
      type: "paragraph",
      text: "For people with ADHD, masking often looks different but carries the same cost. It might mean hiding disorganization, pretending to follow conversations you have lost track of, or working twice as hard to meet deadlines that neurotypical colleagues handle more easily. The effort is invisible to others, but your brain feels every bit of it.",
    },
    {
      type: "heading",
      text: "Why it compounds over time",
    },
    {
      type: "paragraph",
      text: "Neurotypical burnout tends to follow a recognizable pattern: overwork leads to exhaustion, rest leads to recovery. For neurodivergent adults, the pattern is different. The demands that cause burnout are not temporary. They are structural. You cannot take a break from having a brain that processes information differently.",
    },
    {
      type: "paragraph",
      text: "This means the recovery equation changes. You are not recovering from a sprint. You are recovering from a lifetime of running a cognitive translation layer that never turns off. That is why a week of rest might help temporarily, but the burnout returns as soon as normal demands resume.",
    },
    {
      type: "heading",
      text: "The sensory dimension",
    },
    {
      type: "paragraph",
      text: "Sensory processing plays a significant role in neurodivergent burnout. A 2014 study by Teresa Tavassoli and colleagues found that sensory differences significantly affect quality of life in autistic adults. Sensory overload was strongly linked to anxiety, social withdrawal, and fatigue.",
    },
    {
      type: "paragraph",
      text: "For many neurodivergent adults, a typical office environment is a sensory assault: fluorescent lights, background conversations, unexpected sounds, uncomfortable clothing. Each one drains cognitive resources. By the end of the day, there is nothing left.",
    },
    {
      type: "heading",
      text: "What this means for recovery",
    },
    {
      type: "paragraph",
      text: "If neurodivergent burnout has different causes than ordinary burnout, it follows that recovery needs a different approach. Standard burnout advice focuses on reducing workload and increasing rest. Those things help, but they are not enough.",
    },
    {
      type: "paragraph",
      text: "Recovery from neurodivergent burnout requires reducing the total cognitive load, not just the work portion of it. That means less masking, better sensory management, environments that fit how your brain works, and honest acceptance of your actual capacity rather than the capacity you have been performing.",
    },
    {
      type: "callout",
      text: "Neurodivergent burnout is real, it is biological, and it is not your fault. You are not failing. Your brain has been working harder than it should have to for longer than anyone realized.",
    },
    {
      type: "references",
      items: [
        'Raymaker, D. M. et al. (2020). "Having All of Your Internal Resources Exhausted Beyond Measure and Being Left with No Clean-Up Crew." Autism in Adulthood.',
        'Hull, L. et al. (2017). "Putting on My Best Normal." Clinical Psychology Review.',
        'Hult, N. et al. (2022). "Occupational Burnout in Adults with ADHD." BMC Psychiatry.',
        'Tavassoli, T. et al. (2014). "Sensory Processing and Quality of Life in Autistic Adults." Research in Autism Spectrum Disorders.',
      ],
    },
  ],

  "the-energy-problem": [
    {
      type: "heading",
      text: "The advice that never worked",
    },
    {
      type: "paragraph",
      text: "Make a list. Wake up early. Build habits. Break tasks into small steps. Use a planner. Just start.",
    },
    {
      type: "paragraph",
      text: "If you are neurodivergent, you have heard all of this. You have probably tried all of it. And you have probably blamed yourself when it did not work.",
    },
    {
      type: "paragraph",
      text: "Here is the thing: it was never going to work. Not because there is something wrong with you, but because that advice was designed for a brain that does not operate like yours.",
    },
    {
      type: "heading",
      text: "The neurotypical productivity assumption",
    },
    {
      type: "paragraph",
      text: "Most productivity advice rests on a hidden assumption: that your brain has a relatively consistent supply of focus, willpower, and motivation throughout the day, and that these resources respond predictably to routines and habits.",
    },
    {
      type: "paragraph",
      text: "For neurotypical brains, this is roughly true. Executive function operates like a dimmer switch. You can dial focus up and down with some effort. Habits form through repetition. Willpower, while limited, is fairly reliable.",
    },
    {
      type: "paragraph",
      text: "For ADHD and autistic brains, this model breaks down. Executive function does not work like a dimmer switch. It is more like a circuit breaker. It works fine until it does not, and then it shuts off completely.",
    },
    {
      type: "heading",
      text: "The dopamine difference",
    },
    {
      type: "paragraph",
      text: "Nora Volkow's landmark 2009 research on dopamine and ADHD showed that ADHD brains have lower baseline dopamine signaling in the reward and motivation pathways. This means the neurochemical system that makes tasks feel achievable, interesting, and worth doing operates differently.",
    },
    {
      type: "paragraph",
      text: "In practical terms, this is why you can hyperfocus on something fascinating for eight hours straight but cannot make yourself open an email you have been avoiding for three days. It is not a willpower failure. It is a dopamine allocation difference.",
    },
    {
      type: "heading",
      text: "Why habits do not stick",
    },
    {
      type: "paragraph",
      text: "Habit-building advice typically follows the model popularized by James Clear and others: cue, routine, reward, repeat. Over time, the behavior becomes automatic.",
    },
    {
      type: "paragraph",
      text: "This works well when your brain reliably encodes routines into automatic behavior. But for many neurodivergent adults, the automation step never happens. The habit requires the same amount of conscious effort on day 90 as it did on day 1. This is an executive function difference, not a discipline failure.",
    },
    {
      type: "heading",
      text: "Time management versus energy management",
    },
    {
      type: "paragraph",
      text: "Time management assumes that all hours are roughly equal. Block your calendar, assign tasks to time slots, follow the plan.",
    },
    {
      type: "paragraph",
      text: "For neurodivergent adults, all hours are not equal. Your cognitive capacity fluctuates based on dopamine availability, sensory load, sleep quality, social demands, emotional state, and a dozen other variables. A task that takes 20 minutes on a good morning might be genuinely impossible on a bad afternoon.",
    },
    {
      type: "paragraph",
      text: "A growing number of ADHD researchers and coaches now recommend energy management instead of time management. This means tracking your natural energy patterns and working with them rather than against them.",
    },
    {
      type: "heading",
      text: "What actually works",
    },
    {
      type: "list",
      items: [
        "Work with your interest system, not against it. Your brain allocates attention based on interest, urgency, novelty, and challenge. Instead of fighting this, use it.",
        "Use external structure, not internal willpower. Body doubling, accountability partners, visible timers, and environmental cues work because they provide external scaffolding for executive function.",
        "Accept variable capacity. Some days you will be productive. Some days you will not. Planning for inconsistency is more realistic than planning for consistency.",
        "Stop optimizing and start simplifying. Complex productivity systems require executive function to maintain. The simplest possible system is the best one.",
      ],
    },
    {
      type: "callout",
      text: "You are not bad at productivity. You are using the wrong model. Traditional productivity advice is a manual for a different machine. Your brain is not broken. It just needs a different operating system.",
    },
    {
      type: "references",
      items: [
        'Volkow, N. D. et al. (2009). "Evaluating Dopamine Reward Pathway in ADHD." JAMA.',
        'Barkley, R. A. (2019). "A Systematic Review of Executive Function in Adults with ADHD." Journal of Attention Disorders.',
        'Nigg, J. T. (2017). "Annual Research Review: On the Relations Among Self-Regulation, Self-Control, Executive Functioning." Journal of Child Psychology and Psychiatry.',
      ],
    },
  ],

  "understanding-adhd-and-autism-through-biology": [
    {
      type: "heading",
      text: "The question that changes everything",
    },
    {
      type: "paragraph",
      text: "What if ADHD and autism are not disorders at all, but natural variations in how human brains are built?",
    },
    {
      type: "paragraph",
      text: "This is not a feel-good reframe. It is what the genetics and neuroscience research increasingly shows. ADHD and autism have deep biological roots. They are heritable, polygenic, and part of the normal range of human neurological diversity.",
    },
    {
      type: "heading",
      text: "It starts with genes",
    },
    {
      type: "paragraph",
      text: "The genetic evidence for neurodivergence is now substantial. A large 2019 twin study published in JAMA Psychiatry estimated that autism is approximately 80% heritable. That means the majority of what makes someone autistic comes from their genetic makeup, not their environment, upbringing, or experiences.",
    },
    {
      type: "paragraph",
      text: "For ADHD, the picture is similar. A landmark 2019 study by Demontis and colleagues identified 12 genomic regions associated with ADHD, confirming it as a polygenic condition. Polygenic means hundreds or thousands of common genetic variants each contribute a small effect. There is no single \"ADHD gene.\"",
    },
    {
      type: "paragraph",
      text: "This matters because it moves the conversation away from blame. Nobody chose to be neurodivergent. Nobody's parents caused it. It is written into the biological architecture of the brain.",
    },
    {
      type: "heading",
      text: "What is different in the brain",
    },
    {
      type: "paragraph",
      text: "ADHD and dopamine: The most well-established finding in ADHD neuroscience is that dopamine signaling works differently. Nora Volkow's brain imaging research showed that ADHD brains have reduced dopamine activity in the reward and motivation circuits. It is a neurochemical difference, not a character difference.",
    },
    {
      type: "paragraph",
      text: "Autism and connectivity: Brain imaging studies have found that autistic brains show different patterns of neural connectivity. Research on the default mode network shows that autistic adults process information through different pathways. This may explain why social situations require more cognitive effort.",
    },
    {
      type: "paragraph",
      text: "Executive function: Both ADHD and autism involve differences in executive function, the set of cognitive skills that manage planning, working memory, task switching, and impulse control. Russell Barkley's research has shown that executive function challenges in ADHD persist into adulthood even when hyperactivity decreases.",
    },
    {
      type: "heading",
      text: "The overlap is real",
    },
    {
      type: "paragraph",
      text: "One of the most important findings in recent genetics research is that ADHD and autism share significant genetic overlap. A 2019 study by the Psychiatric Genomics Consortium found common genetic pathways across ADHD, autism, depression, and several other conditions.",
    },
    {
      type: "paragraph",
      text: "For the person living it, this means that your experience of having \"a bit of everything\" is not unusual or exaggerated. It reflects the actual genetic architecture of neurodivergence.",
    },
    {
      type: "heading",
      text: "Why this matters for identity",
    },
    {
      type: "paragraph",
      text: "When you understand that your brain is biologically different, not defective, it changes the internal narrative. The years of feeling lazy, broken, or not trying hard enough start to make a different kind of sense.",
    },
    {
      type: "paragraph",
      text: "You were never lazy. Your dopamine system works differently. You were never antisocial. Your brain processes social information through different pathways. You were never failing. You were operating a different kind of brain in environments designed for the majority type.",
    },
    {
      type: "heading",
      text: "The strengths side",
    },
    {
      type: "paragraph",
      text: "Biology does not only explain the challenges. The same neurological differences that create difficulties in some contexts create advantages in others. The ADHD capacity for hyperfocus produces extraordinary depth of engagement. The autistic tendency toward pattern recognition drives innovation. The intense emotional depth creates profound empathy and artistic expression.",
    },
    {
      type: "callout",
      text: "ADHD and autism are not disorders to be corrected. They are neurobiological variations with deep genetic roots. Understanding this changes how you think about yourself.",
    },
    {
      type: "references",
      items: [
        'Bai, D. et al. (2019). "Association of Genetic and Environmental Factors With Autism in a 5-Country Cohort." JAMA Psychiatry.',
        'Demontis, D. et al. (2019). "Discovery of the First Genome-Wide Significant Risk Loci for ADHD." Nature Genetics.',
        'Volkow, N. D. et al. (2009). "Evaluating Dopamine Reward Pathway in ADHD." JAMA.',
        'Cross-Disorder Group of the PGC (2019). "Genomic Relationships, Novel Loci, and Pleiotropic Mechanisms Across Eight Psychiatric Disorders." Cell.',
        'Padmanabhan, A. et al. (2017). "The Default Mode Network in Autism." Biological Psychiatry: CNNI.',
      ],
    },
  ],

  "masking-the-hidden-driver-of-burnout": [
    {
      type: "heading",
      text: "The performance nobody sees",
    },
    {
      type: "paragraph",
      text: "Every day, millions of neurodivergent adults wake up and put on a mask. Not a physical one. A cognitive one.",
    },
    {
      type: "paragraph",
      text: "They force eye contact that feels unnatural. They suppress the urge to stim. They monitor their facial expressions, their tone of voice, their body language. They laugh at the right moments. They pretend to follow small talk. They translate their internal experience into something neurotypical people can understand.",
    },
    {
      type: "paragraph",
      text: "This is masking. And it is one of the most energy-expensive things a human brain can do.",
    },
    {
      type: "heading",
      text: "What masking actually is",
    },
    {
      type: "paragraph",
      text: "Masking, also called camouflaging, is the conscious or unconscious suppression of neurodivergent traits in order to appear neurotypical. Laura Hull's 2017 systematic review identified three core components:",
    },
    {
      type: "list",
      items: [
        "Compensation: Developing strategies to hide difficulties. Rehearsing conversations, memorizing social scripts, creating systems to mask disorganization.",
        "Assimilation: Modifying behavior to fit in. Copying other people's mannerisms, forcing eye contact, suppressing natural movement patterns.",
        "Masking proper: Hiding your authentic self. Not disclosing your diagnosis. Pretending things do not bother you. Acting like everything is fine when it is not.",
      ],
    },
    {
      type: "paragraph",
      text: "Most neurodivergent adults do all three simultaneously, often without realizing how much effort it requires.",
    },
    {
      type: "heading",
      text: "The cognitive cost",
    },
    {
      type: "paragraph",
      text: "Masking is cognitively expensive because it requires running a real-time translation layer between your internal experience and your external behavior. You are simultaneously processing the actual situation, monitoring your own behavior, comparing yourself to neurotypical norms, and suppressing natural impulses.",
    },
    {
      type: "paragraph",
      text: "This is like running four applications at full power on a computer that already has limited processing capacity. Something has to give.",
    },
    {
      type: "heading",
      text: "The connection to burnout",
    },
    {
      type: "paragraph",
      text: "The research connecting masking to burnout is clear. Raymaker's 2020 study on autistic burnout found that masking was one of the strongest predictors of burnout severity. The more someone masked, the more severe their exhaustion, skill loss, and reduced tolerance to stimulation.",
    },
    {
      type: "paragraph",
      text: "For ADHD adults, masking often looks like compensating for executive function differences: staying up late to finish work, creating elaborate organizational systems to appear competent, spending extra energy making sure nothing slips through the cracks.",
    },
    {
      type: "heading",
      text: "What masking costs over time",
    },
    {
      type: "list",
      items: [
        "Identity loss. Many neurodivergent adults describe not knowing who they are outside of the mask. After decades of performing, the authentic self becomes inaccessible.",
        "Delayed diagnosis. Effective masking hides the very traits that would lead to diagnosis. Many adults are not diagnosed until their 30s, 40s, or later.",
        "Mental health impact. Hull's research found significant associations between masking and anxiety, depression, and suicidal ideation.",
        "Relationship strain. When you mask in relationships, the other person never fully knows you. This creates a gap that grows over time.",
      ],
    },
    {
      type: "heading",
      text: "Starting the process of unmasking",
    },
    {
      type: "paragraph",
      text: "Unmasking is not a switch you flip. For many neurodivergent adults, the mask is so deeply integrated that removing it requires active effort, psychological safety, and time.",
    },
    {
      type: "list",
      items: [
        "Notice when you are masking. Start paying attention to the moments when you suppress a natural impulse.",
        "Find safe spaces to unmask. This might be alone, with a trusted person, or in a neurodivergent community.",
        "Expect grief. Many people who start unmasking experience grief for the years spent hiding.",
        "Be patient. You spent years building the mask. It will not come off overnight.",
      ],
    },
    {
      type: "callout",
      text: "The goal is not to eliminate masking entirely but to make it a conscious choice rather than a survival reflex. You deserve spaces where the mask is not required.",
    },
    {
      type: "references",
      items: [
        'Hull, L. et al. (2017). "Putting on My Best Normal: Social Camouflaging in Adults with Autism Spectrum Conditions." Journal of Autism and Developmental Disorders.',
        'Raymaker, D. M. et al. (2020). "Having All of Your Internal Resources Exhausted Beyond Measure." Autism in Adulthood.',
        'Cage, E. & Troxell-Whitman, Z. (2019). "Understanding the Reasons, Contexts, and Costs of Camouflaging for Autistic Adults." Journal of Autism and Developmental Disorders.',
        'Bargiela, S. et al. (2016). "The Experiences of Late-Diagnosed Women with Autism Spectrum Conditions." Journal of Autism and Developmental Disorders.',
      ],
    },
  ],

  "what-recovery-actually-looks-like": [
    {
      type: "heading",
      text: "Why rest is not enough",
    },
    {
      type: "paragraph",
      text: "When neurotypical people experience burnout, the standard recovery path is straightforward: reduce workload, rest, gradually return to normal. This works because the cause of their burnout was temporary overload.",
    },
    {
      type: "paragraph",
      text: "For neurodivergent adults, the cause is not temporary. The cognitive demands that led to burnout are structural. They come from masking, sensory processing, executive function demands, and navigating systems that assume a neurotypical operating model. You cannot rest your way out of a structural problem.",
    },
    {
      type: "heading",
      text: "What recovery is not",
    },
    {
      type: "list",
      items: [
        "Recovery is not pushing through. The instinct to power through burnout is strong, especially for neurodivergent adults who have spent their lives compensating. But pushing through a depleted system deepens the damage.",
        "Recovery is not a productivity system. Many neurodivergent adults respond to burnout by trying to optimize their way out of it. This can actually make things worse because it adds cognitive load.",
        "Recovery is not linear. You will have good days and bad days. Good weeks followed by crashes. This is normal.",
      ],
    },
    {
      type: "heading",
      text: "Phase 1: Reduce the total load",
    },
    {
      type: "paragraph",
      text: "The first phase of recovery is not about adding good things. It is about removing harmful things. The goal is to reduce total cognitive demand below the threshold where your brain can actually rest.",
    },
    {
      type: "list",
      items: [
        "Reduce masking. Identify the environments where you mask most heavily and find ways to reduce the performance.",
        "Manage sensory input. Noise-cancelling headphones, adjusting lighting, wearing comfortable clothing, reducing visual clutter. These are not luxuries. They are cognitive load management.",
        "Cut the unnecessary. Audit your commitments and remove everything that is not essential.",
      ],
    },
    {
      type: "heading",
      text: "Phase 2: Accept your actual capacity",
    },
    {
      type: "paragraph",
      text: "This is the hardest part. Recovery requires an honest assessment of your current capacity. Not the capacity you used to have, not the capacity you think you should have, but the capacity you actually have right now.",
    },
    {
      type: "paragraph",
      text: "This is not giving up. It is creating the conditions for recovery. You cannot rebuild capacity by spending capacity you do not have.",
    },
    {
      type: "heading",
      text: "Phase 3: Build structure that fits",
    },
    {
      type: "list",
      items: [
        "Energy-based scheduling. Schedule your day around your energy, not the clock.",
        "External scaffolding. Visual timers, body doubling, alarms, environmental cues. Reduce the internal effort required to function.",
        "Routine flexibility. Build loose routines rather than rigid ones. A rigid routine breaks on a bad day and creates shame.",
      ],
    },
    {
      type: "heading",
      text: "Phase 4: Reconnect with yourself",
    },
    {
      type: "paragraph",
      text: "Long-term burnout, especially when combined with years of masking, can disconnect you from your own interests, needs, and identity. Recovery includes reconnecting with who you actually are.",
    },
    {
      type: "list",
      items: [
        "Rediscover interests. What did you care about before burnout? Start exploring in small, low-pressure ways.",
        "Practice unmasking. In safe environments, practice behaving authentically.",
        "Find your people. Being around other neurodivergent adults who understand your experience reduces the cognitive load of social interaction.",
      ],
    },
    {
      type: "heading",
      text: "The life on the other side",
    },
    {
      type: "paragraph",
      text: "Recovery from neurodivergent burnout does not mean returning to how things were before. If the way things were before caused burnout, going back to that is not recovery. It is a setup for the next crash.",
    },
    {
      type: "callout",
      text: "Real recovery means building something different. A life that accounts for how your brain actually works. A schedule that respects your energy. Relationships where you can be yourself. It starts with understanding that you are not broken.",
    },
    {
      type: "references",
      items: [
        'Raymaker, D. M. et al. (2020). "Having All of Your Internal Resources Exhausted Beyond Measure." Autism in Adulthood.',
        'Mantzalas, J. et al. (2022). "Understanding and Mitigating the Effect of Autistic Burnout." Brain Sciences.',
        'Barkley, R. A. (2019). "Executive Functioning and Self-Regulation in Adults with ADHD." Journal of Attention Disorders.',
        'Tavassoli, T. et al. (2014). "Sensory Processing and Quality of Life in Autistic Adults." Research in Autism Spectrum Disorders.',
      ],
    },
  ],

  "why-bright-light-feels-exhausting": [
    {
      type: "heading",
      text: "Does this sound familiar?",
    },
    {
      type: "paragraph",
      text: "You walk into a supermarket and within minutes something feels wrong. Not emotionally. Physically. Your eyes ache. Your thinking gets foggy. By the time you reach the checkout, you are irritable, exhausted, and you cannot explain why a routine errand just cost you the rest of your evening.",
    },
    {
      type: "paragraph",
      text: "Or you sit in an open-plan office under banks of fluorescent tubes and by mid-afternoon you feel like you have run a marathon. Your colleagues seem fine. You feel broken.",
    },
    {
      type: "paragraph",
      text: "Many people with ADHD or autism report that bright environments feel exhausting long before others notice a problem. Grocery stores. Office lighting. Computer screens. Long drives in glaring sun. It is not weakness. It is not anxiety. It is how your brain processes sensory input. And there is a biological explanation for why it happens.",
    },
    {
      type: "heading",
      text: "Why bright environments are draining",
    },
    {
      type: "paragraph",
      text: "Light does not just help you see. It is a biological signal that directly affects your nervous system. Specialised cells in your retina called intrinsically photosensitive retinal ganglion cells, or ipRGCs, respond to light wavelengths and send signals not to your visual cortex but to brain regions that control arousal, mood, alertness, and circadian rhythm. These non-visual pathways are part of the melanopsin system, and they are always active.",
    },
    {
      type: "paragraph",
      text: "When light is too bright, too blue, or too inconsistent, these pathways flood the brain with excitatory signals. In neuroscience terms, this is called glutamatergic drive. Glutamate is the brain's primary excitatory neurotransmitter, and when it is constantly being triggered by intense visual input, the nervous system stays on high alert. That alertness feels like productivity at first. Then it feels like anxiety. Then it feels like shutdown.",
    },
    {
      type: "paragraph",
      text: "For neurotypical brains, the sensory gating system filters much of this out. You adapt to the lighting and stop noticing it. For many neurodivergent brains, that automatic filtering does not happen as efficiently. The light keeps demanding active processing, draining cognitive resources that are already under pressure from masking, executive function demands, and social navigation.",
    },
    {
      type: "heading",
      text: "How sensory processing differs in neurodivergent brains",
    },
    {
      type: "paragraph",
      text: "Sensory processing is not a single ability. It is a complex system of detection, filtering, interpretation, and response. Research has identified consistent differences in how autistic and ADHD brains handle sensory input.",
    },
    {
      type: "paragraph",
      text: "A 2014 study by Teresa Tavassoli and colleagues found that sensory differences significantly affect quality of life in autistic adults. Visual sensitivity was among the most commonly reported challenges. Participants described difficulty with fluorescent lights, sunlight glare, busy visual environments, and rapid changes in light levels.",
    },
    {
      type: "paragraph",
      text: "For ADHD, the picture is slightly different but equally significant. ADHD brains tend to have lower baseline dopamine in the prefrontal cortex, which affects the ability to filter irrelevant stimuli. In a bright, visually complex environment, every flicker of movement, every reflection, every change in lighting competes for attention. The brain cannot easily decide what matters and what does not, so it tries to process everything. That is metabolically expensive.",
    },
    {
      type: "paragraph",
      text: "The result is the same: cognitive fatigue that builds across the day. By mid-afternoon, the neurodivergent person who has been sitting under fluorescent lights has spent significantly more cognitive energy on environmental processing than their neurotypical colleagues, even if their actual workload was identical.",
    },
    {
      type: "heading",
      text: "Common environments that trigger visual fatigue",
    },
    {
      type: "paragraph",
      text: "Once you understand the mechanism, the pattern becomes obvious. The environments that drain neurodivergent adults most are the ones with the highest visual processing demands:",
    },
    {
      type: "list",
      items: [
        "Open-plan offices. Overhead fluorescent panels, multiple screens in peripheral vision, people moving constantly. Every visual event demands attentional filtering that the ADHD or autistic brain cannot automate.",
        "Supermarkets and shopping centres. High-intensity lighting designed to make products look appealing, combined with visual clutter, reflective surfaces, and crowds. Many neurodivergent adults describe grocery shopping as one of the most exhausting routine activities.",
        "Hospitals and clinical settings. Flat, even lighting at high intensity with no natural light variation. Healthcare workers with ADHD or autism often report that the lighting alone contributes to shift fatigue, independent of the emotional demands of the job.",
        "Schools and universities. Classroom lighting is typically fluorescent, uniform, and non-adjustable. Students with sensory differences lose cognitive capacity to the lighting before the lecture even starts.",
        "Screens after dark. Blue-rich LED screens in the evening suppress melatonin production via the melanopsin pathway. For neurodivergent adults who already struggle with sleep onset and circadian regulation, this extends the period of neural hyperarousal deep into the night.",
      ],
    },
    {
      type: "heading",
      text: "Why this is not just preference",
    },
    {
      type: "paragraph",
      text: "It is important to understand that light sensitivity in neurodivergent adults is not a preference or a personality quirk. It is a measurable neurological difference. Research using functional MRI has shown that FL-41 spectral filters, which target the wavelengths most associated with visual discomfort, reduce activation in pain-processing regions of the brain, including the somatosensory cortex and insula. The brain is genuinely responding to the light as a stressor.",
    },
    {
      type: "paragraph",
      text: "Clinical studies on spectral filtering and ADHD have produced striking results. In one study, 49% of participants no longer met ADHD diagnostic criteria after implementing spectral filtering. At long-term follow-up, that number rose to 64%. While these results relate to the broader science of spectral filtering rather than any single product, they illustrate how significant the impact of light management can be.",
    },
    {
      type: "heading",
      text: "Practical strategies for managing your light environment",
    },
    {
      type: "paragraph",
      text: "The good news is that once you recognise light as a source of cognitive load, there are practical ways to reduce it:",
    },
    {
      type: "list",
      items: [
        "Audit your lighting at home. Replace overhead fluorescent or cool-white LED bulbs with warm-white alternatives (2700K or lower). Use adjustable lamps rather than fixed ceiling lights so you can control intensity and direction.",
        "Use dimmable and smart lighting. Products like Philips Hue let you adjust colour temperature and brightness throughout the day. Warm, dim light in the evening supports your circadian rhythm and reduces neural arousal.",
        "Position yourself near natural light. If you work in an office, request a desk near a window. Natural light provides a full, stable spectrum that is easier for the brain to process than artificial alternatives.",
        "Reduce screen brightness and use warm modes. Most devices now offer night mode or warm colour settings. Use them from late afternoon onwards. Reduce screen brightness below the default, which is typically set far higher than necessary for comfortable viewing.",
        "Take visual breaks. The 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds) is a starting point, but neurodivergent adults may need longer visual rest periods. Five minutes in a dimly lit room can do more to restore cognitive capacity than a coffee break.",
        "Wear a hat or visor indoors. This sounds unusual, but a brimmed hat in a fluorescent environment blocks overhead light from reaching your eyes directly. Many neurodivergent adults find this surprisingly effective.",
      ],
    },
    {
      type: "heading",
      text: "A tool some people use: sensory-support lenses",
    },
    {
      type: "paragraph",
      text: "Some neurodivergent adults find significant relief using tinted lenses specifically designed to soften harsh lighting and reduce visual strain. These are not the generic blue-light blockers you find at a petrol station. Precision spectral-filtering lenses target the specific wavelengths most associated with visual overstimulation and circadian disruption.",
    },
    {
      type: "paragraph",
      text: "One example is Lume by Parallel Eyewear, which uses a proprietary dual-filter lens system called Neox. The Balance lens filters 30 to 60 percent of excitatory blue-green light for daytime use in high-stimulus environments like offices and hospitals. The Downshift lens blocks 100 percent of the 460 to 480 nanometre range, the peak melatonin-suppression wavelength, to support evening nervous system recovery.",
    },
    {
      type: "paragraph",
      text: "These are consumer wellness tools rather than medical devices, and individual experiences will vary. But for neurodivergent adults who have identified light as a significant source of daily fatigue, targeted spectral filtering is a more science-informed approach than commodity blue-light glasses.",
    },
    {
      type: "paragraph",
      text: 'You can learn more about Lume and the research behind it on our <a href="/tools">Tools We Trust</a> page.',
    },
    {
      type: "heading",
      text: "Rethinking your relationship with light",
    },
    {
      type: "paragraph",
      text: "Most people never think about the light in their environment. It is just there. But for neurodivergent adults, light is an active input that competes for the same cognitive resources needed for focus, social interaction, emotional regulation, and executive function. Managing it is not a luxury. It is a practical strategy for reducing total cognitive load.",
    },
    {
      type: "paragraph",
      text: "The environments we spend our days in were designed for neurotypical sensory processing. That does not mean you are broken for finding them exhausting. It means the environment was not designed for your brain. And unlike many aspects of neurodivergent life, your light environment is something you can actually change.",
    },
    {
      type: "callout",
      text: "Light sensitivity is not a weakness. It is your nervous system accurately reporting that the environment is demanding more processing than it should. Managing your light environment is one of the most underused and most effective strategies for reducing neurodivergent fatigue.",
    },
    {
      type: "heading",
      text: "We want to hear from you",
    },
    {
      type: "paragraph",
      text: 'Do bright environments exhaust you? Have you found strategies that help? We are building a community of neurodivergent adults who share what actually works. Your experience could help someone who is still wondering why they feel so drained. Join the conversation in our <a href="https://likeminds-community-8530fe.circle.so">community</a>.',
    },
    {
      type: "references",
      items: [
        'Tavassoli, T. et al. (2014). "Sensory Processing and Quality of Life in Autistic Adults." Research in Autism Spectrum Disorders.',
        'Noseda, R. et al. (2016). "Migraine photophobia originating in cone-driven retinal pathways." Brain.',
        'Main, A. et al. (2000). "Photophobia and phonophobia in migraineurs between attacks." Headache.',
        'Hoggan, R. N. et al. (2016). "Thin-film optical notch filter spectacle coatings for the treatment of migraine and photophobia." Journal of Clinical Neuroscience.',
        'Volkow, N. D. et al. (2009). "Evaluating Dopamine Reward Pathway in ADHD." JAMA.',
      ],
    },
  ],
};
