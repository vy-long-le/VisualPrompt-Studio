import type { ProductFieldKnowledgeEntry } from "../types";

export const PRODUCT_FIELD_KNOWLEDGE_ENTRIES = [
  {
    id: "product-knowledge:product-description",
    fieldId: "product-description",
    title: "Product description",
    summary:
      "Information about the object or product set that must appear. This is the primary input that defines the subject, not a style description.",
    effect:
      "Places the supplied product identity at the center of the brief so later scene and style choices describe the correct subject.",
    whenToUse:
      "Always enter this before Generate; it identifies the product or lists the contents of the set.",
    howToUse:
      "State the category, shape, color, material, and details you know. For a bundle, list every item and quantity. Include a brand or label only when it was supplied.",
    examples: [
      "A fictional matte ivory lotion bottle with a rounded charcoal pump and an unprinted body.",
    ],
    caveats: [
      "Do not use “a premium product” in place of a description, and do not guess ingredients or SKUs.",
    ],
    relatedTerms: ["Product description", "supplied fact", "literal prose"],
    wordingPattern:
      "{product-description}: A fictional matte ivory lotion bottle with a rounded charcoal pump and an unprinted body.",
    validationBoundaries:
      "String up to 1200 characters; no unsafe control characters. Required.",
    starterSuggestions: [
      "A fictional matte ivory lotion bottle with a rounded charcoal pump and an unprinted body.",
    ],
  },
  {
    id: "product-knowledge:reference-mode",
    fieldId: "reference-mode",
    title: "Reference mode",
    summary:
      "The role of a reference in the external workflow. This application only writes the brief; this choice does not upload or analyze an image.",
    effect:
      "States whether product identity comes from text alone or from an image the user will attach in the external image generator.",
    whenToUse:
      "Use this to state whether you will provide a product-identity image in the image generator or work from text alone.",
    howToUse:
      "Choose Description only when creating a concept from text. Choose External product reference when you will attach a product image in the external image generator, then describe the image’s role in Reference notes.",
    examples: ["External product reference"],
    caveats: [
      "Do not call a reference verified unless it has been checked. A URL or dropdown selection is not evidence that an image was attached.",
    ],
    relatedTerms: ["Description only", "External product reference"],
    wordingPattern: "{reference-mode}: External product reference",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: ["Description only", "External product reference"],
  },
  {
    id: "product-knowledge:reference-notes",
    fieldId: "reference-notes",
    title: "Reference notes",
    summary:
      "Instructions that identify which images act as product, style, or composition references and which parts of each reference may be used.",
    effect:
      "Adds the declared role and usable scope of each external reference so product identity, style, and composition references remain distinct.",
    whenToUse:
      "Enter this when using an external reference to distinguish product-identity, style, and composition roles.",
    howToUse:
      "Name each role clearly, such as image 1 = exact product. State limits such as not inferring the unseen back. You do not need to enter a URL to use this field.",
    examples: [
      "Image 1 will be attached externally as the product identity reference; use only visible front and side details.",
    ],
    caveats: [
      "Do not mix a style reference with a product-identity reference or claim that this application has read the image.",
    ],
    relatedTerms: ["Reference notes", "supplied fact", "literal prose"],
    wordingPattern:
      "{reference-notes}: Image 1 will be attached externally as the product identity reference; use only visible front and side details.",
    validationBoundaries:
      "String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Image 1 will be attached externally as the product identity reference; use only visible front and side details.",
    ],
  },
  {
    id: "product-knowledge:preserve-details",
    fieldId: "preserve-details",
    title: "Preserve details",
    summary:
      "Confirmed attributes that must remain unchanged when the scene or style changes, including silhouette, color, proportions, logo, copy, or accessories.",
    effect:
      "Adds explicit identity constraints so confirmed product attributes are not intentionally redesigned by later creative instructions.",
    whenToUse:
      "Enter this when known form, color, copy, or other important supplied details must be preserved.",
    howToUse:
      "List important details that have a source. Use specific descriptions such as rounded pump or exact label spelling, and avoid promises of perfect accuracy.",
    examples: [
      "Keep the ivory body, charcoal pump, rounded shoulder and unprinted body unchanged.",
    ],
    caveats: [
      "Do not request an unchanged color while also asking the scene palette to recolor the product. Do not invent unseen engraving or logos.",
    ],
    relatedTerms: ["Preserve details", "supplied fact", "literal prose"],
    wordingPattern:
      "{preserve-details}: Keep the ivory body, charcoal pump, rounded shoulder and unprinted body unchanged.",
    validationBoundaries:
      "String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Keep the ivory body, charcoal pump, rounded shoulder and unprinted body unchanged.",
    ],
  },
  {
    id: "product-knowledge:use-case",
    fieldId: "use-case",
    title: "Use case",
    summary:
      "The intended placement and primary requirements of the output. It distinguishes listing imagery from promotional or editorial work.",
    effect:
      "Sets the output context used by later guidance and validation, including the distinction between listing, gallery, campaign, and editorial imagery.",
    whenToUse:
      "Always choose the intended output purpose before Generate because listing images and advertisements have different requirements.",
    howToUse:
      "Choose the correct channel intent before adjusting the scene. A Google primary listing triggers promotional-copy checks; a gallery image does not automatically inherit every primary-listing policy.",
    examples: ["Campaign advertisement"],
    caveats: [
      "Do not apply Google listing policy as a ban on every social advertisement. This selection does not verify that a generated image is compliant.",
    ],
    relatedTerms: [
      "Google Merchant Center primary listing",
      "Product gallery image",
      "Campaign advertisement",
      "Editorial product concept",
    ],
    wordingPattern: "{use-case}: Campaign advertisement",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Required.",
    starterSuggestions: [
      "Google Merchant Center primary listing",
      "Product gallery image",
      "Campaign advertisement",
    ],
  },
  {
    id: "product-knowledge:creative-objective",
    fieldId: "creative-objective",
    title: "Creative objective",
    summary:
      "What the image should communicate clearly to the viewer. The objective is the communication task; mood is the intended feeling.",
    effect:
      "States the image’s main communication task and guides which product information should receive visual priority.",
    whenToUse:
      "Use this when the viewer needs a clear communication objective. Leave it blank when the objective is not yet known.",
    howToUse:
      "Choose one priority or enter a custom objective. State what the viewer should understand, such as shape, use, detail, scale, or the contents of a collection.",
    examples: ["Show the product silhouette clearly"],
    caveats: [
      "Do not enter goals such as “guarantee sales” or another result that cannot be communicated by the image itself.",
    ],
    relatedTerms: [
      "Show the product silhouette clearly",
      "Introduce a product launch",
      "Show everyday product context",
      "Reveal a specific construction detail",
      "Show relative size",
      "Explain the included collection",
      "Create a campaign focal point",
    ],
    wordingPattern: "{creative-objective}: Show the product silhouette clearly",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Show the product silhouette clearly",
      "Introduce a product launch",
      "Show everyday product context",
    ],
  },
  {
    id: "product-knowledge:audience",
    fieldId: "audience",
    title: "Audience",
    summary:
      "The viewers the creative is intended for. Audience context can guide setting and information emphasis without changing product identity.",
    effect:
      "Adds relevant viewer context that may guide the setting and level of information while leaving supplied product facts unchanged.",
    whenToUse:
      "Use this when the viewer group and relevant context are known. Do not guess an audience.",
    howToUse:
      "Describe the relevant group and use context. Leave it blank when unknown, and do not assign stereotypes about behavior or preferences.",
    examples: ["People comparing compact desk accessories"],
    caveats: [
      "Do not infer demographics from the product’s appearance or turn an audience description into a performance claim.",
    ],
    relatedTerms: ["Audience", "supplied fact", "literal prose"],
    wordingPattern: "{audience}: People comparing compact desk accessories",
    validationBoundaries:
      "String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: ["People comparing compact desk accessories"],
  },
  {
    id: "product-knowledge:placement-surface",
    fieldId: "placement-surface",
    title: "Placement surface",
    summary:
      "The surface or support point on which the product is placed. It is a specific part of the scene, while Environment describes the surrounding space.",
    effect:
      "Specifies the product’s immediate support or contact surface, affecting grounding, material contrast, and local reflections in the brief.",
    whenToUse:
      "Use this when the product’s support point or contact surface needs to be defined.",
    howToUse:
      "Choose a surface that supports the objective and product material. Describe a specific texture for a custom value. If the product is held, state the corresponding placement.",
    examples: ["A low matte stone plinth"],
    caveats: [
      "Do not place one product on conflicting surfaces across different fields. Reflections should remain consistent with the selected surface.",
    ],
    relatedTerms: [
      "White seamless sweep",
      "Matte stone plinth",
      "Brushed concrete slab",
      "Warm wood tabletop",
      "Raw linen surface",
      "Smoked glass platform",
      "Held in a hand",
    ],
    wordingPattern: "{placement-surface}: A low matte stone plinth",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "White seamless sweep",
      "Matte stone plinth",
      "Brushed concrete slab",
    ],
  },
  {
    id: "product-knowledge:environment",
    fieldId: "environment",
    title: "Environment",
    summary:
      "The space surrounding the subject, including the location, background, and contextual setting.",
    effect:
      "Specifies the surrounding location and background that provide context without redefining the supplied product identity.",
    whenToUse:
      "Use this to choose the background or space around the product. Leave it blank when no environment is needed.",
    howToUse:
      "Choose a setting that is specific enough to be useful without overwhelming the product. Include time of day or weather when outdoor context requires it.",
    examples: ["A quiet home workspace beside a window"],
    caveats: [
      "Avoid conflicting directions such as an empty background and a busy street filled with props. Prefer one coherent setting.",
    ],
    relatedTerms: [
      "Plain white studio",
      "Controlled tonal studio",
      "Home workspace by a window",
      "Bathroom counter with daylight",
      "Outdoor running track",
      "Urban street at dusk",
      "Minimal architectural set",
    ],
    wordingPattern: "{environment}: A quiet home workspace beside a window",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Plain white studio",
      "Controlled tonal studio",
      "Home workspace by a window",
    ],
  },
  {
    id: "product-knowledge:props",
    fieldId: "props",
    title: "Props",
    summary:
      "Objects that support story, scale, or styling but are not products included in the sale.",
    effect:
      "Adds supporting scene objects while keeping them distinct from the supplied product or bundle contents.",
    whenToUse:
      "Use this for styling elements beyond the items being sold. Leave it blank when no props are needed.",
    howToUse:
      "Name each prop and state its position or role. Keep included bundle contents in Product description and styling props in this field.",
    examples: [
      "A folded neutral towel behind the bottle, not included in the product",
    ],
    caveats: [
      "Do not add objects that could be mistaken for included products. Avoid props outside the supplied bundle for a Google primary listing.",
    ],
    relatedTerms: ["Props", "supplied fact", "literal prose"],
    wordingPattern:
      "{props}: A folded neutral towel behind the bottle, not included in the product",
    validationBoundaries:
      "String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "A folded neutral towel behind the bottle, not included in the product",
    ],
  },
  {
    id: "product-knowledge:product-arrangement",
    fieldId: "product-arrangement",
    title: "Product arrangement",
    summary:
      "How one or more products are positioned and related, such as upright, resting, grouped, flat, or held during an interaction.",
    effect:
      "Controls how the supplied product or products are positioned relative to one another in the composition.",
    whenToUse:
      "Use this to describe the pose of one product or the relationship between items in a bundle.",
    howToUse:
      "Choose an arrangement that fits the quantity and geometry. For a group, list the included items in Product description and describe only their arrangement here.",
    examples: ["A spaced group with each included item visible"],
    caveats: [
      "Do not invent extra variants to fill the scene. A selected flat lay should use an overhead viewpoint.",
    ],
    relatedTerms: [
      "Single upright product",
      "Single product resting at an angle",
      "Overhead flat lay arrangement",
      "Spaced group of included items",
      "Product beside its supplied packaging",
      "Product held for size context",
    ],
    wordingPattern:
      "{product-arrangement}: A spaced group with each included item visible",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Single upright product",
      "Single product resting at an angle",
      "Overhead flat lay arrangement",
    ],
  },
  {
    id: "product-knowledge:shot-size",
    fieldId: "shot-size",
    title: "Shot size",
    summary:
      "The closeness of the framing, from a contextual wide shot to a macro crop. Camera angle separately defines the viewpoint.",
    effect:
      "Controls how much of the product and surrounding context fills the frame without changing the camera viewpoint.",
    whenToUse:
      "Use this to decide whether the whole product, its context, or a particular detail should dominate the frame.",
    howToUse:
      "Choose the framing distance according to the information priority. Name the Detail target for a detail crop, and avoid an overly tight crop when the complete silhouette must remain visible.",
    examples: ["Close-up with the whole product visible"],
    caveats: [
      "A close-up is not automatically a macro view. Cropping can hide labels, product geometry, or bundle contents.",
    ],
    relatedTerms: [
      "Wide contextual shot",
      "Medium product shot",
      "Close-up with the whole product visible",
      "Tight detail crop",
      "Macro detail view",
    ],
    wordingPattern: "{shot-size}: Close-up with the whole product visible",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Wide contextual shot",
      "Medium product shot",
      "Close-up with the whole product visible",
    ],
  },
  {
    id: "product-knowledge:camera-angle",
    fieldId: "camera-angle",
    title: "Camera angle",
    summary:
      "The viewpoint from which the product is seen, such as product level, overhead, low, high, side, or three-quarter.",
    effect:
      "Controls the viewpoint from which the product’s surfaces, profile, and form are presented.",
    whenToUse:
      "Use this when the front, side, top, or another specific product viewpoint needs to be shown.",
    howToUse:
      "Choose an angle that reveals the important surface. Overhead suits a flat lay, while three-quarter reveals form. Follow the reference angle when unseen sides are unknown.",
    examples: ["Three-quarter view at product level"],
    caveats: [
      "Do not treat a lens value as a camera angle or invent an unseen back surface without evidence.",
    ],
    relatedTerms: [
      "Straight-on at product level",
      "Three-quarter view at product level",
      "Overhead top-down",
      "Low angle",
      "High angle looking down",
      "Side profile",
    ],
    wordingPattern: "{camera-angle}: Three-quarter view at product level",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Straight-on at product level",
      "Three-quarter view at product level",
      "Overhead top-down",
    ],
  },
  {
    id: "product-knowledge:composition",
    fieldId: "composition",
    title: "Composition",
    summary:
      "The placement of the focal subject, the rhythm of arranged objects, and the distribution of open space within the frame.",
    effect:
      "Controls focal placement, visual rhythm, and the distribution of occupied and open areas in the frame.",
    whenToUse:
      "Use this to control hero placement, layout rhythm, or the location of open space.",
    howToUse:
      "Choose one primary layout and coordinate it with Copy space. Use a custom value for a specific position; do not combine every composition rule at once.",
    examples: ["Product on the left third with an open right side"],
    caveats: [
      "Composition does not set aspect ratio. Do not require the same subject to be both centered and on the left third.",
    ],
    relatedTerms: [
      "Centered with balanced margins",
      "Product on the left third",
      "Product on the right third",
      "Dynamic diagonal",
      "C-shaped supporting layout",
      "Ordered grid of included items",
      "Asymmetric hero composition",
    ],
    wordingPattern:
      "{composition}: Product on the left third with an open right side",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Centered with balanced margins",
      "Product on the left third",
      "Product on the right third",
    ],
  },
  {
    id: "product-knowledge:focus-treatment",
    fieldId: "focus-treatment",
    title: "Focus treatment",
    summary:
      "Which areas should remain sharp and which areas may be blurred. This describes visual intent rather than controlling a physical aperture.",
    effect:
      "Directs which product areas remain sharp and which parts of the background or surrounding scene may fall out of focus.",
    whenToUse:
      "Use this when one detail, the whole product, or every product in a group must remain readable.",
    howToUse:
      "Name the detail that should be sharp. Keep every important product readable when the whole product or group matters. Shallow background focus only reduces background detail.",
    examples: ["Whole product sharp with a softly separated background"],
    caveats: [
      "Do not use blur to conceal label errors or claim that a particular lens or focus-stacking process was used.",
    ],
    relatedTerms: [
      "Whole product sharp",
      "Whole product sharp with a softly separated background",
      "Selected detail sharp with gentle falloff",
      "All included products readable",
      "Deep scene focus",
    ],
    wordingPattern:
      "{focus-treatment}: Whole product sharp with a softly separated background",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Whole product sharp",
      "Whole product sharp with a softly separated background",
      "Selected detail sharp with gentle falloff",
    ],
  },
  {
    id: "product-knowledge:lighting-style",
    fieldId: "lighting-style",
    title: "Lighting style",
    summary:
      "The character of the illumination, such as diffuse, directional, rim-accented, or daylight. Light direction separately describes where the source comes from.",
    effect:
      "Defines the softness and overall character of illumination used to reveal product form and confirmed material qualities.",
    whenToUse:
      "Use this when light quality should clarify the supplied product form or surface.",
    howToUse:
      "Choose a light quality that supports the form and material. Soft light creates gentle transitions; rim emphasis separates edges while the product front should remain readable.",
    examples: ["Soft diffused studio key with gentle fill"],
    caveats: [
      "Do not treat “cinematic” as a complete lighting plan. Avoid overexposing labels or important highlights.",
    ],
    relatedTerms: [
      "Soft diffused studio key with gentle fill",
      "Broad high-key illumination",
      "Window daylight with gentle fill",
      "Directional key with controlled fill",
      "Rim-accent lighting with a readable front",
      "Hard directional light",
    ],
    wordingPattern:
      "{lighting-style}: Soft diffused studio key with gentle fill",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Soft diffused studio key with gentle fill",
      "Broad high-key illumination",
      "Window daylight with gentle fill",
    ],
  },
  {
    id: "product-knowledge:light-direction",
    fieldId: "light-direction",
    title: "Light direction",
    summary:
      "The main direction of illumination relative to the camera and subject.",
    effect:
      "Sets where the primary light comes from, influencing the prompt’s description of volume, texture, and highlight placement.",
    whenToUse:
      "Use this when the key-light direction matters for volume, texture, or highlights.",
    howToUse:
      "Choose a direction that reveals volume or texture. Use camera-left or camera-right instead of an ambiguous left or right.",
    examples: ["Camera-left at a gentle side angle"],
    caveats: [
      "Do not require every shadow to point directly opposite the main light without accounting for fill or a secondary source.",
    ],
    relatedTerms: [
      "Camera-left side light",
      "Camera-right side light",
      "Front and slightly above",
      "Back edge with frontal fill",
      "Top light with side fill",
    ],
    wordingPattern: "{light-direction}: Camera-left at a gentle side angle",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Camera-left side light",
      "Camera-right side light",
      "Front and slightly above",
    ],
  },
  {
    id: "product-knowledge:shadow-treatment",
    fieldId: "shadow-treatment",
    title: "Shadow treatment",
    summary: "The visibility and hardness of cast shadows or contact shadows.",
    effect:
      "Sets whether shadows are soft, crisp, deep, or minimal and whether they ground the product or create graphic structure.",
    whenToUse:
      "Use this when shadows should establish contact, add dimension, or act as a graphic element in the scene.",
    howToUse:
      "Choose a shadow treatment for grounding, dimension, or graphic rhythm. Minimal visible shadow remains an intent that requires output review or post-production.",
    examples: ["Soft contact shadow grounding the product"],
    caveats: [
      "Do not require a physically grounded appearance while forbidding every contact cue unless a deliberately stylized result is intended.",
    ],
    relatedTerms: [
      "Soft contact shadow",
      "Subtle directional shadow",
      "Crisp graphic shadow",
      "Deep controlled shadows",
      "Minimal visible shadow",
    ],
    wordingPattern:
      "{shadow-treatment}: Soft contact shadow grounding the product",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Soft contact shadow",
      "Subtle directional shadow",
      "Crisp graphic shadow",
    ],
  },
  {
    id: "product-knowledge:material-emphasis",
    fieldId: "material-emphasis",
    title: "Material emphasis",
    summary:
      "A supplied surface or optical detail that the depiction should emphasize. This field does not authorize changing the product’s material.",
    effect:
      "Directs lighting and detail language toward confirmed surface or optical qualities without authorizing a different material.",
    whenToUse:
      "Use this to emphasize a real finish or texture, especially for glass, fabric, and reflective surfaces.",
    howToUse:
      "Choose a feature already present in Product description or a supplied reference. Use a custom value for highlight behavior or stitching while preserving material identity.",
    examples: ["Controlled reflections on the supplied glass finish"],
    caveats: [
      "Do not turn a matte product into a mirror finish to imply luxury. Verify any glass transparency that is not visible in the supplied information.",
    ],
    relatedTerms: [
      "Natural matte texture",
      "Controlled reflective highlights",
      "Readable glass edges and label",
      "Fine stitching or construction texture",
      "Consistent fabric weave",
      "Authentic surface without added gloss",
    ],
    wordingPattern:
      "{material-emphasis}: Controlled reflections on the supplied glass finish",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Natural matte texture",
      "Controlled reflective highlights",
      "Readable glass edges and label",
    ],
  },
  {
    id: "product-knowledge:palette",
    fieldId: "palette",
    title: "Scene palette",
    summary:
      "The colors of the environment, props, and overall scene. Supplied product colors remain part of the product identity.",
    effect:
      "Guides environment, prop, and overall scene colors while leaving supplied product colors unchanged.",
    whenToUse:
      "Use this to direct scene color. Continue to derive the product’s own color from supplied facts.",
    howToUse:
      "Choose a palette that supports the product or enter specific background and accent colors. State that the palette applies to the scene when product color must be preserved.",
    examples: ["Warm ivory scene with restrained charcoal accents"],
    caveats: [
      "Do not use the scene palette to recolor the product. Neon illumination may create a color cast that requires review.",
    ],
    relatedTerms: [
      "Neutral white and gray scene",
      "Warm ivory and charcoal scene",
      "Tonal stone and beige scene",
      "Deep navy and restrained silver scene",
      "Muted natural greens and browns",
      "Bold complementary scene accents",
    ],
    wordingPattern:
      "{palette}: Warm ivory scene with restrained charcoal accents",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Neutral white and gray scene",
      "Warm ivory and charcoal scene",
      "Tonal stone and beige scene",
    ],
  },
  {
    id: "product-knowledge:mood",
    fieldId: "mood",
    title: "Mood",
    summary:
      "The feeling the image should suggest, such as calm, refined, energetic, playful, or precise.",
    effect:
      "States the intended emotional tone, which should be expressed through concrete lighting, composition, and palette decisions.",
    whenToUse:
      "Use this when a specific feeling is needed. Mood does not replace lighting or the creative objective.",
    howToUse:
      "Choose one main feeling, then express it through specific lighting, composition, and palette choices. Mood alone does not define a complete scene.",
    examples: ["Calm and approachable"],
    caveats: [
      "Do not chain terms such as “luxury cinematic premium epic” when they do not add a specific creative decision.",
    ],
    relatedTerms: [
      "Clear and informative",
      "Calm and approachable",
      "Refined and restrained",
      "Energetic and purposeful",
      "Playful and bright",
      "Precise and tactile",
    ],
    wordingPattern: "{mood}: Calm and approachable",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Clear and informative",
      "Calm and approachable",
      "Refined and restrained",
    ],
  },
  {
    id: "product-knowledge:visual-treatment",
    fieldId: "visual-treatment",
    title: "Visual treatment",
    summary:
      "How the image should appear to have been produced, such as commercial, lifestyle, editorial, graphic, or stylized photographic work.",
    effect:
      "Sets the overall production look described by the prompt while keeping the use-case and product facts unchanged.",
    whenToUse:
      "Use this to choose an overall look appropriate to a commercial, lifestyle, or editorial task.",
    howToUse:
      "Choose a treatment consistent with the use case. A stylized concept can support a campaign but does not automatically qualify as a compliant listing depiction.",
    examples: ["Photorealistic commercial product photography"],
    caveats: [
      "A photorealistic treatment does not guarantee correct geometry or text. Evaluate the actual generated output.",
    ],
    relatedTerms: [
      "Photorealistic commercial product photography",
      "Natural lifestyle photography",
      "Editorial still-life photography",
      "Graphic commercial photography",
      "Stylized photographic campaign composite",
    ],
    wordingPattern:
      "{visual-treatment}: Photorealistic commercial product photography",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Photorealistic commercial product photography",
      "Natural lifestyle photography",
      "Editorial still-life photography",
    ],
  },
  {
    id: "product-knowledge:interaction-action",
    fieldId: "interaction-action",
    title: "Interaction or action",
    summary:
      "What a person or object is doing with the product, or an action cue captured within a still image.",
    effect:
      "Adds a specific action, contact point, or freeze-frame cue involving the supplied product.",
    whenToUse:
      "Use this for a hand action, another interaction, or an action cue in a still image.",
    howToUse:
      "Describe one specific action with clear contact or hand position. For a dynamic still, state a freeze-frame cue rather than a shot sequence or video script.",
    examples: [
      "A hand holds the bottle beside a familiar notebook; fingers leave the product unobstructed.",
    ],
    caveats: [
      "Do not add products from a person-only reference. The supplied product remains the subject of the Product workflow.",
    ],
    relatedTerms: ["Interaction or action", "supplied fact", "literal prose"],
    wordingPattern:
      "{interaction-action}: A hand holds the bottle beside a familiar notebook; fingers leave the product unobstructed.",
    validationBoundaries:
      "String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "A hand holds the bottle beside a familiar notebook; fingers leave the product unobstructed.",
    ],
  },
  {
    id: "product-knowledge:detail-target",
    fieldId: "detail-target",
    title: "Detail target",
    summary:
      "The specific product area that should receive close attention in a macro or detail image.",
    effect:
      "Identifies the evidence-backed feature that a tight detail or macro view should prioritize.",
    whenToUse:
      "Enter this when a particular feature must be inspected, especially for a macro view or tight crop.",
    howToUse:
      "Name an area supported by evidence, such as a seam, pump, engraving, or finish. Coordinate it with Shot size and Focus treatment without silently changing the camera angle.",
    examples: ["The join between the pump head and bottle shoulder"],
    caveats: [
      "Do not crop into an unseen detail or invented construction. Do not turn a material detail into a performance claim.",
    ],
    relatedTerms: ["Detail target", "supplied fact", "literal prose"],
    wordingPattern:
      "{detail-target}: The join between the pump head and bottle shoulder",
    validationBoundaries:
      "String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: ["The join between the pump head and bottle shoulder"],
  },
  {
    id: "product-knowledge:scale-cue",
    fieldId: "scale-cue",
    title: "Scale cue",
    summary:
      "An object or contextual relationship that helps the viewer understand relative product size.",
    effect:
      "Adds a familiar comparison or known relationship that communicates approximate relative size without asserting an unverified measurement.",
    whenToUse:
      "Use this when relative size needs context. Do not treat it as evidence of an exact measurement.",
    howToUse:
      "Use a familiar object or a measured relationship that is known. For a concept-only image, state that the scale is approximate and do not add an unsupported measurement.",
    examples: [
      "Approximate contextual scale beside an ordinary hand; not a measured size claim.",
    ],
    caveats: [
      "Generated scale can be wrong. Exact catalogue dimensions require supplied measurements or references and review of the actual output.",
    ],
    relatedTerms: ["Scale cue", "supplied fact", "literal prose"],
    wordingPattern:
      "{scale-cue}: Approximate contextual scale beside an ordinary hand; not a measured size claim.",
    validationBoundaries:
      "String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Approximate contextual scale beside an ordinary hand; not a measured size claim.",
    ],
  },
  {
    id: "product-knowledge:copy-treatment",
    fieldId: "copy-treatment",
    title: "Copy treatment",
    summary:
      "The rule for added text: add none, reserve space for later typography, or render supplied copy. Physical product labels belong in Preserve details.",
    effect:
      "Determines whether the image brief forbids added copy, reserves layout space, or requests the rendering of user-supplied text.",
    whenToUse:
      "Choose this when you need to distinguish no added text, space for a designer, or rendering approved copy.",
    howToUse:
      "Choose Reserve space for later copy when typography will be added in a design tool. Render supplied copy requires Exact copy. Do not enter an unconfirmed offer.",
    examples: ["Reserve space for later copy"],
    caveats: [
      "No added copy does not mean removing a physical product label. Keep added copy distinct from packaging text.",
    ],
    relatedTerms: [
      "No added copy",
      "Reserve space for later copy",
      "Render supplied copy",
    ],
    wordingPattern: "{copy-treatment}: Reserve space for later copy",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "No added copy",
      "Reserve space for later copy",
      "Render supplied copy",
    ],
  },
  {
    id: "product-knowledge:copy-space",
    fieldId: "copy-space",
    title: "Copy space",
    summary:
      "An uncluttered area reserved for layout or visual breathing room. It does not contain the copy itself.",
    effect:
      "Reserves a clean region for later typography or breathing room without supplying text content.",
    whenToUse:
      "Use this when the layout needs an open region for text or breathing room, and coordinate it with Composition.",
    howToUse:
      "Choose a location consistent with Composition and aspect ratio. Leave it blank when no layout space is needed. This field does not guarantee a pixel-safe area.",
    examples: ["Uncluttered right third"],
    caveats: [
      "Do not request an empty right third while placing the subject on the right third. Verify platform interface safe zones in the generator or layout tool.",
    ],
    relatedTerms: [
      "Uncluttered right third",
      "Uncluttered left third",
      "Open upper area",
      "Open lower area",
      "Generous balanced breathing room",
    ],
    wordingPattern: "{copy-space}: Uncluttered right third",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "Uncluttered right third",
      "Uncluttered left third",
      "Open upper area",
    ],
  },
  {
    id: "product-knowledge:exact-copy",
    fieldId: "exact-copy",
    title: "Exact copy",
    summary:
      "User-supplied text to render or retain as a note for later layout. The compiler does not invent a headline, price, offer, or call to action.",
    effect:
      "Contributes the user’s exact text for rendering or post-production notes without allowing the compiler to invent or rewrite it.",
    whenToUse:
      "This is required for Render supplied copy, optional for a post-production note, and incompatible with No added copy.",
    howToUse:
      "Enter the exact spelling and punctuation. Preserve intentional whitespace; only line endings are normalized. Render mode preserves the text, while reserve mode identifies it for post-production.",
    examples: ["A SIMPLE DAILY RITUAL"],
    caveats: [
      "Do not translate the copy or add a call to action. Record physical label text in Preserve details, and review exact typography in the generated output.",
    ],
    relatedTerms: ["Exact copy", "supplied fact", "literal prose"],
    wordingPattern: "{exact-copy}: A SIMPLE DAILY RITUAL",
    validationBoundaries:
      "String up to 240 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: ["A SIMPLE DAILY RITUAL"],
  },
  {
    id: "product-knowledge:aspect-ratio",
    fieldId: "aspect-ratio",
    title: "Aspect ratio",
    summary:
      "The intended width-to-height proportion of the composition. It expresses brief intent rather than an actual API size setting.",
    effect:
      "Guides width-to-height composition planning while leaving the actual output dimensions to the external image tool.",
    whenToUse:
      "Use this when the layout orientation or format is known. This field does not set output pixels.",
    howToUse:
      "Choose the ratio before positioning the subject and copy space. After copying the prompt to an image generator, set a matching ratio or output size there when supported.",
    examples: ["4:5"],
    caveats: [
      "Do not claim that the prompt itself creates a file at the exact ratio. Do not add universal --ar syntax or dimensions copied from another model.",
    ],
    relatedTerms: ["1:1", "4:5", "9:16", "16:9", "3:2"],
    wordingPattern: "{aspect-ratio}: 4:5",
    validationBoundaries:
      "String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: ["1:1", "4:5", "9:16"],
  },
  {
    id: "product-knowledge:exclusions",
    fieldId: "exclusions",
    title: "Exclusions",
    summary:
      "Elements that must not be added or alterations that should be avoided. These are natural-language instructions rather than a provider-specific negative-prompt parameter.",
    effect:
      "Adds specific natural-language constraints for unwanted additions or alterations without claiming deterministic filtering.",
    whenToUse:
      "Use this when particular errors or additions should be avoided. Leave it blank when no additional constraint is needed.",
    howToUse:
      "Name relevant risks such as invented logos, extra products, watermarks, or distorted hands. Use specific constraints and avoid overly broad negation.",
    examples: [
      "No invented logos, extra products, added watermark or altered product geometry.",
    ],
    caveats: [
      "Do not say no text when a supplied label must remain. Negative wording is not a guaranteed filter.",
    ],
    relatedTerms: ["Exclusions", "supplied fact", "literal prose"],
    wordingPattern:
      "{exclusions}: No invented logos, extra products, added watermark or altered product geometry.",
    validationBoundaries:
      "String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required.",
    starterSuggestions: [
      "No invented logos, extra products, added watermark or altered product geometry.",
    ],
  },
] as const satisfies readonly ProductFieldKnowledgeEntry[];
