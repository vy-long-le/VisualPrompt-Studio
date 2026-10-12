# DISC-01 Preset Molds

Version 1.0 · ten research profiles · not empirically image-tested.

Every `{field-name}` is a literal variable. Substitute current normalized values once. Blank optional values remove the entire clause; remove empty headings. Product description and use case are required. Do not restore preset defaults after a user clears/edits a value. Current values override all defaults.

The exact-copy clause has two alternatives: in reserve-only mode, label it as later post-production copy and explicitly do not render it; in render-copy mode, request the supplied copy exactly. No-added-copy with nonblank exact-copy is an error. Exact copy uses quoted JSON string representation without translation.

Save/load/remix must preserve explicit templateProfileId and compilerVersion under the proposed persistence amendment. sourcePresetId is provenance only. The JSON catalogue contains declarative conditional clauses and all default mappings.

## product-p01 Clean Catalog Packshot

Profile: `product-p01-mold`

Prioritize identity and channel restrictions before scene or aesthetics.

```text
# Product image brief

## Identity and listing intent
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.

## Unobstructed depiction
Selected framing: {shot-size}.
Viewpoint: {camera-angle}.
Keep the supplied subject readable using {composition}.
Focus intent: {focus-treatment}.
Product placement: {placement-surface}.
Surrounding scene: {environment}.
Only the explicitly supplied supporting elements are requested: {props}.
Product arrangement: {product-arrangement}.

## Readable finish
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.

## Optional product context
Interaction or frozen action: {interaction-action}.
Supplied feature to inspect within the selected framing: {detail-target}.
Relative size context, without adding unverified measurements: {scale-cue}.

## Output and constraints
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Google Merchant Center primary listing |
| creative-objective | Show the product silhouette clearly |
| audience | (blank; user supplied or omitted) |
| placement-surface | White seamless sweep |
| environment | Plain white studio |
| props | (blank; user supplied or omitted) |
| product-arrangement | Single upright product |
| shot-size | Close-up with the whole product visible |
| camera-angle | Straight-on at product level |
| composition | Centered with balanced margins |
| focus-treatment | Whole product sharp |
| lighting-style | Broad high-key illumination |
| light-direction | Front and slightly above |
| shadow-treatment | Minimal visible shadow |
| material-emphasis | Authentic surface without added gloss |
| palette | Neutral white and gray scene |
| mood | Clear and informative |
| visual-treatment | Photorealistic commercial product photography |
| interaction-action | (blank; user supplied or omitted) |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 1:1 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p02 Sculptural Studio Hero

Profile: `product-p02-mold`

Establish product priority, then placement and sculptural spatial hierarchy before finishing.

```text
# Product image brief

## Hero object and objective
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.

## Designed spatial hierarchy
Build the selected product staging around {placement-surface}.
Surrounding scene: {environment}.
Supporting props and their roles: {props}.
Product arrangement: {product-arrangement}.
Selected framing: {shot-size}.
Viewpoint: {camera-angle}.
Arrange the set around the hero object using {composition}.
Focus intent: {focus-treatment}.

## Set and surface finish
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.

## Optional secondary detail
Interaction or frozen action: {interaction-action}.
Supplied feature to inspect within the selected framing: {detail-target}.
Relative size context, without adding unverified measurements: {scale-cue}.

## Campaign delivery
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Campaign advertisement |
| creative-objective | Introduce a product launch |
| audience | (blank; user supplied or omitted) |
| placement-surface | Matte stone plinth |
| environment | Minimal architectural set |
| props | One low geometric backdrop form behind the product; styling prop only. |
| product-arrangement | Single upright product |
| shot-size | Close-up with the whole product visible |
| camera-angle | Three-quarter view at product level |
| composition | Asymmetric hero composition |
| focus-treatment | Whole product sharp |
| lighting-style | Soft diffused studio key with gentle fill |
| light-direction | Camera-left side light |
| shadow-treatment | Soft contact shadow |
| material-emphasis | Authentic surface without added gloss |
| palette | Tonal stone and beige scene |
| mood | Refined and restrained |
| visual-treatment | Photorealistic commercial product photography |
| interaction-action | (blank; user supplied or omitted) |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 4:5 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p03 Contextual Lifestyle

Profile: `product-p03-mold`

Lead with environment and relation to use, then preserve subject and readable framing.

```text
# Product image brief

## Everyday context and relevance
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.
Let the everyday context be {environment}.
Relate the supplied product to this concrete moment: {interaction-action}.
Relative size context, without adding unverified measurements: {scale-cue}.

## Product identity within the scene
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.

## Contextual staging and framing
Product placement: {placement-surface}.
Supporting props and their roles: {props}.
Product arrangement: {product-arrangement}.
Selected framing: {shot-size}.
Viewpoint: {camera-angle}.
Spatial composition: {composition}.
Focus intent: {focus-treatment}.

## Natural scene treatment
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.
Supplied feature to inspect within the selected framing: {detail-target}.

## Delivery and exclusions
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Product gallery image |
| creative-objective | Show everyday product context |
| audience | (blank; user supplied or omitted) |
| placement-surface | Warm wood tabletop |
| environment | Home workspace by a window |
| props | A closed notebook behind the product; styling prop, not included. |
| product-arrangement | Single upright product |
| shot-size | Medium product shot |
| camera-angle | Three-quarter view at product level |
| composition | Product on the right third |
| focus-treatment | Whole product sharp |
| lighting-style | Window daylight with gentle fill |
| light-direction | Camera-left side light |
| shadow-treatment | Soft contact shadow |
| material-emphasis | Authentic surface without added gloss |
| palette | Warm ivory and charcoal scene |
| mood | Calm and approachable |
| visual-treatment | Natural lifestyle photography |
| interaction-action | (blank; user supplied or omitted) |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 4:5 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p04 Craft and Material Detail

Profile: `product-p04-mold`

Lead with detail target and focus; describe crop from current values without forcing a macro after override.

```text
# Product image brief

## Inspection priority
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.
Inspect this supplied feature, without inventing additional construction: {detail-target}.
Selected framing: {shot-size}.
Make the chosen information readable with {focus-treatment}.

## Supplied identity boundaries
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.

## Detail viewpoint and staging
Viewpoint: {camera-angle}.
Spatial composition: {composition}.
Product placement: {placement-surface}.
Surrounding scene: {environment}.
Supporting props and their roles: {props}.
Product arrangement: {product-arrangement}.

## Surface reading
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.

## Optional context and output
Interaction or frozen action: {interaction-action}.
Relative size context, without adding unverified measurements: {scale-cue}.
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Product gallery image |
| creative-objective | Reveal a specific construction detail |
| audience | (blank; user supplied or omitted) |
| placement-surface | Matte stone plinth |
| environment | Controlled tonal studio |
| props | (blank; user supplied or omitted) |
| product-arrangement | Single upright product |
| shot-size | Macro detail view |
| camera-angle | Side profile |
| composition | Centered with balanced margins |
| focus-treatment | Selected detail sharp with gentle falloff |
| lighting-style | Directional key with controlled fill |
| light-direction | Camera-left side light |
| shadow-treatment | Soft contact shadow |
| material-emphasis | Natural matte texture |
| palette | Neutral white and gray scene |
| mood | Precise and tactile |
| visual-treatment | Photorealistic commercial product photography |
| interaction-action | (blank; user supplied or omitted) |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 4:5 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p05 Editorial Flat Lay

Profile: `product-p05-mold`

Establish arrangement and view together, then supporting-element hierarchy and texture.

```text
# Product image brief

## Arrangement narrative
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.
Construct the chosen arrangement as {product-arrangement}.
Viewpoint: {camera-angle}.
Spatial composition: {composition}.

## Hero item identity
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.

## Supporting layout
Product placement: {placement-surface}.
Surrounding scene: {environment}.
Use these secondary objects to support the layout rather than replace the product: {props}.
Selected framing: {shot-size}.
Focus intent: {focus-treatment}.

## Texture and illumination
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.

## Optional detail and delivery
Interaction or frozen action: {interaction-action}.
Supplied feature to inspect within the selected framing: {detail-target}.
Relative size context, without adding unverified measurements: {scale-cue}.
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Product gallery image |
| creative-objective | Create a campaign focal point |
| audience | (blank; user supplied or omitted) |
| placement-surface | Raw linen surface |
| environment | Controlled tonal studio |
| props | A small folded fabric swatch and a plain paper card; styling props only. |
| product-arrangement | Overhead flat lay arrangement |
| shot-size | Close-up with the whole product visible |
| camera-angle | Overhead top-down |
| composition | C-shaped supporting layout |
| focus-treatment | Deep scene focus |
| lighting-style | Soft diffused studio key with gentle fill |
| light-direction | Camera-left side light |
| shadow-treatment | Soft contact shadow |
| material-emphasis | Authentic surface without added gloss |
| palette | Tonal stone and beige scene |
| mood | Clear and informative |
| visual-treatment | Editorial still-life photography |
| interaction-action | (blank; user supplied or omitted) |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 4:5 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p06 Relative Scale Demonstration

Profile: `product-p06-mold`

Lead with scale relation and interaction; never convert a contextual cue into an exact measurement.

```text
# Product image brief

## Relative size relationship
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.
Represent this relative-size cue as contextual information, not certified measurement: {scale-cue}.
Make the scale relationship legible through {interaction-action}.

## Product facts and preservation
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.

## Readable comparison
Product arrangement: {product-arrangement}.
Selected framing: {shot-size}.
Viewpoint: {camera-angle}.
Spatial composition: {composition}.
Focus intent: {focus-treatment}.
Product placement: {placement-surface}.
Surrounding scene: {environment}.
Supporting props and their roles: {props}.

## Comparison finish
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.
Supplied feature to inspect within the selected framing: {detail-target}.

## Delivery constraints
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Product gallery image |
| creative-objective | Show relative size |
| audience | (blank; user supplied or omitted) |
| placement-surface | Held in a hand |
| environment | Home workspace by a window |
| props | (blank; user supplied or omitted) |
| product-arrangement | Product held for size context |
| shot-size | Medium product shot |
| camera-angle | Three-quarter view at product level |
| composition | Centered with balanced margins |
| focus-treatment | Whole product sharp |
| lighting-style | Window daylight with gentle fill |
| light-direction | Camera-left side light |
| shadow-treatment | Soft contact shadow |
| material-emphasis | Authentic surface without added gloss |
| palette | Neutral white and gray scene |
| mood | Clear and informative |
| visual-treatment | Natural lifestyle photography |
| interaction-action | A relaxed hand supports the product from below without hiding its main shape. |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | Approximate size context relative to an ordinary hand; not a measured dimension claim. |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 4:5 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p07 Bundle and Packaging Overview

Profile: `product-p07-mold`

Lead with complete inventory and arrangement, then equal readability and containment.

```text
# Product image brief

## Collection contents and purpose
Show precisely this supplied inventory, preserving stated item counts: {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.

## Inventory layout
Product arrangement: {product-arrangement}.
Spatial composition: {composition}.
Product placement: {placement-surface}.
Surrounding scene: {environment}.
Supporting props and their roles: {props}.

## Per item readability
Selected framing: {shot-size}.
Viewpoint: {camera-angle}.
Keep the collection legible with {focus-treatment}.
Supplied feature to inspect within the selected framing: {detail-target}.
Relative size context, without adding unverified measurements: {scale-cue}.

## Collection finish
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.
Interaction or frozen action: {interaction-action}.

## Output boundaries
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Product gallery image |
| creative-objective | Explain the included collection |
| audience | (blank; user supplied or omitted) |
| placement-surface | White seamless sweep |
| environment | Controlled tonal studio |
| props | (blank; user supplied or omitted) |
| product-arrangement | Spaced group of included items |
| shot-size | Medium product shot |
| camera-angle | High angle looking down |
| composition | Ordered grid of included items |
| focus-treatment | All included products readable |
| lighting-style | Soft diffused studio key with gentle fill |
| light-direction | Camera-left side light |
| shadow-treatment | Soft contact shadow |
| material-emphasis | Authentic surface without added gloss |
| palette | Neutral white and gray scene |
| mood | Clear and informative |
| visual-treatment | Photorealistic commercial product photography |
| interaction-action | (blank; user supplied or omitted) |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 3:2 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p08 Reflective Luxury Still Life

Profile: `product-p08-mold`

Lead with material response and light control, then scene restraint; preserve the actual product finish.

```text
# Product image brief

## Surface response and objective
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.
Read the actual surface through {material-emphasis}; do not invent a different physical finish.
Control surface readability with {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.

## Actual product identity
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.

## Reflection and framing
Product placement: {placement-surface}.
Surrounding scene: {environment}.
Supporting props and their roles: {props}.
Product arrangement: {product-arrangement}.
Selected framing: {shot-size}.
Viewpoint: {camera-angle}.
Spatial composition: {composition}.
Focus intent: {focus-treatment}.

## Art direction and optional context
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.
Interaction or frozen action: {interaction-action}.
Supplied feature to inspect within the selected framing: {detail-target}.
Relative size context, without adding unverified measurements: {scale-cue}.

## Delivery and exclusions
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Editorial product concept |
| creative-objective | Create a campaign focal point |
| audience | (blank; user supplied or omitted) |
| placement-surface | Smoked glass platform |
| environment | Controlled tonal studio |
| props | (blank; user supplied or omitted) |
| product-arrangement | Single upright product |
| shot-size | Close-up with the whole product visible |
| camera-angle | Three-quarter view at product level |
| composition | Centered with balanced margins |
| focus-treatment | Whole product sharp |
| lighting-style | Rim-accent lighting with a readable front |
| light-direction | Back edge with frontal fill |
| shadow-treatment | Deep controlled shadows |
| material-emphasis | Controlled reflective highlights |
| palette | Deep navy and restrained silver scene |
| mood | Refined and restrained |
| visual-treatment | Editorial still-life photography |
| interaction-action | (blank; user supplied or omitted) |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 4:5 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p09 Dynamic Performance Concept

Profile: `product-p09-mold`

Lead with action cue and framing; stabilize identity and visibility before atmospheric styling.

```text
# Product image brief

## Frozen action and communication
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.
Stage one still image with this action cue: {interaction-action}.
Spatial composition: {composition}.
Selected framing: {shot-size}.

## Unchanged product
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.

## Energy and readability
Product placement: {placement-surface}.
Surrounding scene: {environment}.
Supporting props and their roles: {props}.
Product arrangement: {product-arrangement}.
Viewpoint: {camera-angle}.
Retain product readability using {focus-treatment}.

## Light and visual treatment
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.

## Optional inspection and delivery
Supplied feature to inspect within the selected framing: {detail-target}.
Relative size context, without adding unverified measurements: {scale-cue}.
Added copy policy: {copy-treatment}.
Layout breathing room or copy region: {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Campaign advertisement |
| creative-objective | Create a campaign focal point |
| audience | (blank; user supplied or omitted) |
| placement-surface | Brushed concrete slab |
| environment | Outdoor running track |
| props | (blank; user supplied or omitted) |
| product-arrangement | Single upright product |
| shot-size | Medium product shot |
| camera-angle | Low angle |
| composition | Dynamic diagonal |
| focus-treatment | Whole product sharp |
| lighting-style | Hard directional light |
| light-direction | Camera-right side light |
| shadow-treatment | Crisp graphic shadow |
| material-emphasis | Authentic surface without added gloss |
| palette | Bold complementary scene accents |
| mood | Energetic and purposeful |
| visual-treatment | Graphic commercial photography |
| interaction-action | A small dust accent behind the product suggests movement in one frozen still; product stays unobstructed. |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | No added copy |
| copy-space | (blank; user supplied or omitted) |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 4:5 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |


## product-p10 Copy Ready Campaign Layout

Profile: `product-p10-mold`

Lead with communication, copy handling and spatial reservation; product depiction supports that layout.

```text
# Product image brief

## Communication and copy handling
Output use: {use-case}.
Creative objective: {creative-objective}.
Intended viewer context: {audience}.
Added copy policy: {copy-treatment}.
Organize the message layout around {copy-space}.
Approved copy: {exact-copy}
Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.

## Product identity
Depict {product-description}.
Reference handling: {reference-mode}.
Reference roles and scope: {reference-notes}.
Keep these supplied details unchanged: {preserve-details}.

## Layout supporting the message
Position the product to support the current copy policy with {composition}.
Product arrangement: {product-arrangement}.
Selected framing: {shot-size}.
Viewpoint: {camera-angle}.
Focus intent: {focus-treatment}.
Product placement: {placement-surface}.
Surrounding scene: {environment}.
Supporting props and their roles: {props}.

## Campaign visual finish
Light quality and setup: {lighting-style}.
Primary light direction: {light-direction}.
Shadow rendering: {shadow-treatment}.
Emphasize existing surface features: {material-emphasis}.
Apply this palette to the scene, while retaining supplied product colors: {palette}.
Visual mood: {mood}.
Image treatment: {visual-treatment}.

## Optional context and constraints
Interaction or frozen action: {interaction-action}.
Supplied feature to inspect within the selected framing: {detail-target}.
Relative size context, without adding unverified measurements: {scale-cue}.
Additional constraints: {exclusions}.

Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.
```

| Variable | Default after selecting preset |
| --- | --- |
| product-description | (blank; user supplied or omitted) |
| reference-mode | Description only |
| reference-notes | (blank; user supplied or omitted) |
| preserve-details | (blank; user supplied or omitted) |
| use-case | Campaign advertisement |
| creative-objective | Create a campaign focal point |
| audience | (blank; user supplied or omitted) |
| placement-surface | Matte stone plinth |
| environment | Controlled tonal studio |
| props | (blank; user supplied or omitted) |
| product-arrangement | Single upright product |
| shot-size | Close-up with the whole product visible |
| camera-angle | Three-quarter view at product level |
| composition | Product on the left third |
| focus-treatment | Whole product sharp |
| lighting-style | Soft diffused studio key with gentle fill |
| light-direction | Camera-left side light |
| shadow-treatment | Soft contact shadow |
| material-emphasis | Authentic surface without added gloss |
| palette | Warm ivory and charcoal scene |
| mood | Refined and restrained |
| visual-treatment | Photorealistic commercial product photography |
| interaction-action | (blank; user supplied or omitted) |
| detail-target | (blank; user supplied or omitted) |
| scale-cue | (blank; user supplied or omitted) |
| copy-treatment | Reserve space for later copy |
| copy-space | Uncluttered right third |
| exact-copy | (blank; user supplied or omitted) |
| aspect-ratio | 16:9 |
| exclusions | No invented product details, extra logos, added watermark or altered geometry. |
