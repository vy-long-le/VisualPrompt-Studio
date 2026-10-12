# DISC-01 Field Encyclopedia

Version 1.0. Vietnamese user help; English stored values and prompts.

Evidence confirms documented use of fields and concepts, not empirical effectiveness of exact phrases. All presets are editable. Ordinary text is literal prose; exact copy is preserved. Start Blank applies no creative defaults. Fields marked optional may be cleared.
| Field / variable | Là gì | Cách dùng | Input model |
| --- | --- | --- | --- |
| product-description | Thông tin về vật thể hoặc bộ sản phẩm cần xuất hiện. Đây là đầu vào chính xác định subject, không phải mô tả phong cách. | Ghi category, hình dáng, màu, chất liệu và các chi tiết biết chắc. Với bundle, liệt kê từng món và số lượng. Chỉ ghi thương hiệu hoặc label khi đã được cung cấp. | free-text |
| reference-mode | Vai trò của reference trong quy trình bên ngoài. Website hiện chỉ viết brief; lựa chọn này không upload hoặc phân tích ảnh. | Chọn description-only khi tạo concept từ text. Chọn external product reference khi bạn sẽ đính kèm ảnh sản phẩm ở image generator; ghi vai trò ảnh vào Reference notes. | fixed-choice |
| reference-notes | Chỉ dẫn ảnh nào làm product reference, style reference hoặc composition reference và phần nào được dùng. | Đặt tên vai trò rõ ràng, ví dụ image 1 = exact product. Nêu phạm vi như không suy đoán mặt sau. Không cần nhập URL để dùng field này. | free-text |
| preserve-details | Các thuộc tính phải giữ khi đổi scene hoặc style: silhouette, màu, tỷ lệ, logo, chữ hoặc phụ kiện đã xác nhận. | Liệt kê những chi tiết quan trọng và có nguồn. Dùng mô tả cụ thể như rounded pump hoặc exact label spelling; tránh lời hứa perfect accuracy. | free-text |
| use-case | Loại nơi sử dụng và yêu cầu chính của output. Nó giúp phân biệt listing image với promotional art. | Chọn đúng channel intent trước khi chỉnh scene. Google primary listing kích hoạt kiểm tra promotional copy; gallery không tự có cùng toàn bộ policy. | fixed-choice |
| creative-objective | Điều hình ảnh cần làm rõ cho người xem. Khác với mood: objective là nhiệm vụ truyền đạt, mood là cảm giác. | Chọn một priority hoặc nhập custom objective. Nói rõ viewer cần thấy gì: hình dáng, cách dùng, chi tiết, quy mô hoặc một collection. | suggested-choice |
| audience | Người xem mà creative hướng tới. Audience giúp chọn bối cảnh và mức độ thông tin, không thay đổi identity sản phẩm. | Mô tả nhóm người và ngữ cảnh sử dụng có liên quan. Để trống nếu chưa biết; không gán stereotype về hành vi hoặc sở thích. | free-text |
| placement-surface | Bề mặt hoặc điểm đặt sản phẩm: một phần cụ thể của scene. Khác environment là không gian tổng thể. | Chọn bề mặt hỗ trợ mục tiêu và chất liệu. Mô tả texture cụ thể nếu nhập custom; nếu sản phẩm được cầm, ghi vị trí tương ứng. | suggested-choice |
| environment | Không gian bao quanh subject, gồm địa điểm, background và contextual setting. | Chọn scene đủ cụ thể nhưng không lấn át sản phẩm. Có thể ghi thời điểm hoặc weather khi ảnh cần outdoor context. | suggested-choice |
| props | Vật hỗ trợ story, scale hoặc styling nhưng không phải sản phẩm được bán. | Ghi tên props và vị trí hoặc vai trò. Phân biệt included bundle contents với styling props trong Product description. Để trống khi không cần props. | free-text |
| product-arrangement | Cách xếp một hoặc nhiều sản phẩm và quan hệ của chúng: upright, flat, grouped hoặc trong thao tác. | Chọn arrangement phù hợp số lượng và geometry. Với group, danh sách món thuộc Product description; arrangement chỉ mô tả cách xếp. | suggested-choice |
| shot-size | Mức độ gần của framing, từ contextual wide shot tới macro crop. Khác camera angle là viewpoint. | Chọn mức gần theo information priority. Nếu detail crop, chỉ ra Detail target; nếu cần nhìn toàn bộ silhouette, tránh crop quá sát. | suggested-choice |
| camera-angle | Vị trí nhìn vào sản phẩm: eye level, above, low hoặc three-quarter. | Chọn angle bộc lộ mặt quan trọng. Overhead hợp flat lay; three-quarter bộc lộ form. Giữ angle theo reference nếu chưa biết các mặt còn lại. | suggested-choice |
| composition | Vị trí focal subject, nhịp xếp vật và phân bố khoảng trống trong frame. | Chọn một layout chính rồi phối với Copy space. Dùng custom để nói vị trí cụ thể; không cần dùng mọi rule of thirds hoặc symmetry cùng lúc. | suggested-choice |
| focus-treatment | Vùng nào cần sharp và phần nào được phép blur. Đây là visual intent, không phải actual aperture control. | Nêu detail cần nét. Khi toàn bộ product hoặc group quan trọng, giữ các món đọc được. Shallow background focus chỉ giảm độ rõ background. | suggested-choice |
| lighting-style | Tính chất của illumination: diffuse, directional, rim hoặc daylight. Khác Light direction là hướng nguồn. | Chọn light quality phục vụ form và material. Soft light tạo chuyển tiếp nhẹ; rim emphasis làm cạnh nổi nhưng vẫn cần product đọc được. | suggested-choice |
| light-direction | Hướng chính của illumination tương đối với camera và subject. | Chọn hướng giúp nhận ra volume hoặc texture. Dùng camera-left/right thay vì “left” không rõ hệ quy chiếu. | suggested-choice |
| shadow-treatment | Mức độ hiện và hardness của shadows hoặc contact shadow. | Chọn shadow có vai trò grounding, dimension hoặc graphic rhythm. Khi no visible shadow, hiểu đó là intent cần post-processing hoặc output review. | suggested-choice |
| material-emphasis | Bề mặt hoặc optical detail cần nhấn mạnh trong depiction. Không phải quyền đổi vật liệu của sản phẩm. | Chọn feature đã có trong Product description hoặc reference. Dùng custom để nêu highlight behavior hoặc stitching; giữ material identity. | suggested-choice |
| palette | Màu của environment, props và overall scene; product color vẫn theo identity đã cung cấp. | Chọn palette bổ trợ product hoặc nhập background/accent cụ thể. Hãy nói rõ palette applies to scene nếu product color phải giữ. | suggested-choice |
| mood | Cảm giác mà image cần gợi, như calm hoặc energetic. | Dùng một cảm giác chính rồi biến nó thành lighting, composition và palette cụ thể. Mood không tự cung cấp đầy đủ scene. | suggested-choice |
| visual-treatment | Cách hình ảnh nên trông được sản xuất: commercial photo, lifestyle, editorial hoặc stylized composite. | Chọn treatment nhất quán với use-case. Stylized concept có thể dùng cho campaign nhưng không tự là compliant depiction cho listing. | suggested-choice |
| interaction-action | Điều người hoặc vật đang làm với sản phẩm, hoặc action cue trong một ảnh tĩnh. | Ghi một hành động cụ thể với contact/hand position rõ. Với dynamic still, nêu freeze-frame cue thay vì shot sequence hoặc video script. | free-text |
| detail-target | Bộ phận cần xem kỹ trong macro hoặc detail image. | Ghi khu vực có evidence: seam, pump, engraving hoặc finish. Ghép với Shot size và Focus treatment, không tự thay angle. | free-text |
| scale-cue | Vật hoặc ngữ cảnh so sánh kích thước tương đối để viewer hiểu product scale. | Dùng familiar object hoặc measured relation biết chắc. Nếu chỉ concept, ghi approximate contextual scale; không thêm số đo chưa có. | free-text |
| copy-treatment | Quy tắc đối với chữ thêm vào hình: không thêm, reserve space để thêm sau, hoặc render supplied copy. Physical label thuộc Preserve details. | Chọn reserve space khi muốn typography được thêm ở design tool sau. Render supplied copy bắt buộc Exact copy. Không nhập offer chưa được xác nhận. | fixed-choice |
| copy-space | Vùng sạch dành cho layout hoặc khoảng thở. Không phải nội dung chữ. | Chọn vị trí thống nhất với Composition và aspect ratio. Khi không cần layout, để trống. Đây không phải pixel-safe-zone guarantee. | suggested-choice |
| exact-copy | Chữ được user cung cấp để render hoặc ghi chú cho layout sau. Compiler không sáng tác headline, giá hoặc offer. | Nhập đúng spelling/punctuation. Giữ intentional whitespace; chỉ chuẩn hóa line endings. Render mode sẽ giữ text; reserve mode đánh dấu copy dành cho post-production. | free-text |
| aspect-ratio | Tỷ lệ width:height của composition mong muốn. Đây là brief intent, không phải actual API size setting. | Chọn trước khi bố trí subject và copy-space. Sau khi copy prompt sang generator, đặt ratio/size tương ứng ở tool nếu hỗ trợ. | fixed-choice |
| exclusions | Những thứ không được thêm hoặc cần tránh trong generated image. Được viết bằng ngôn ngữ tự nhiên, không phải negative_prompt API. | Ghi các rủi ro có liên quan: invented logo, extra products, watermark hoặc distorted hands. Dùng constraints cụ thể và tránh phủ định quá rộng. | free-text |


## Product description — `{product-description}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Thông tin về vật thể hoặc bộ sản phẩm cần xuất hiện. Đây là đầu vào chính xác định subject, không phải mô tả phong cách. |
| Khi dùng | Luôn nhập trước khi Generate; đây là identity của sản phẩm hoặc inventory của bộ. |
| Cách dùng | Ghi category, hình dáng, màu, chất liệu và các chi tiết biết chắc. Với bundle, liệt kê từng món và số lượng. Chỉ ghi thương hiệu hoặc label khi đã được cung cấp. |
| Ví dụ minh họa | A fictional matte ivory lotion bottle with a rounded charcoal pump and an unprinted body. |
| Wording pattern | {product-description}: A fictional matte ivory lotion bottle with a rounded charcoal pump and an unprinted body. |
| Lỗi thường gặp | Không dùng “a premium product” thay cho mô tả; không đoán thành phần hoặc SKU. |
| Limits | String up to 1200 characters; no unsafe control characters. Required. |
| Default / blank | Start Blank = empty. Blocking required-field error. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V01, V02 |
| Evidence | S01: Product intake / Product design lock; S05: §18 Product Input; W18: six-slot Subject |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: A fictional matte ivory lotion bottle with a rounded charcoal pump and an unprinted body..


## Reference mode — `{reference-mode}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Vai trò của reference trong quy trình bên ngoài. Website hiện chỉ viết brief; lựa chọn này không upload hoặc phân tích ảnh. |
| Khi dùng | Dùng để nói rõ bạn có cung cấp ảnh identity ở image generator hay chỉ dùng text. |
| Cách dùng | Chọn description-only khi tạo concept từ text. Chọn external product reference khi bạn sẽ đính kèm ảnh sản phẩm ở image generator; ghi vai trò ảnh vào Reference notes. |
| Ví dụ minh họa | External product reference |
| Wording pattern | {reference-mode}: External product reference |
| Lỗi thường gặp | Không gọi ảnh là verified nếu chưa kiểm tra; không coi URL hoặc lựa chọn dropdown là bằng chứng ảnh đã được gửi. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select; custom False |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V03, V12 |
| Evidence | S03: §15 Mode selection; S01: Product design lock; W11: reference roles |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| reference-mode-v01 | Description only | Chỉ mô tả bằng text; không có ảnh identity được hứa hẹn. |
| reference-mode-v02 | External product reference | Bạn sẽ gắn ảnh sản phẩm ở công cụ ngoài; prompt chỉ nói vai trò ảnh. |


## Reference notes — `{reference-notes}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Chỉ dẫn ảnh nào làm product reference, style reference hoặc composition reference và phần nào được dùng. |
| Khi dùng | Nhập khi dùng external reference; giúp phân biệt identity, style và composition roles. |
| Cách dùng | Đặt tên vai trò rõ ràng, ví dụ image 1 = exact product. Nêu phạm vi như không suy đoán mặt sau. Không cần nhập URL để dùng field này. |
| Ví dụ minh họa | Image 1 will be attached externally as the product identity reference; use only visible front and side details. |
| Wording pattern | {reference-notes}: Image 1 will be attached externally as the product identity reference; use only visible front and side details. |
| Lỗi thường gặp | Không trộn style reference với identity reference; không tuyên bố website đã đọc ảnh. |
| Limits | String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | Required when reference-mode = External product reference. |
| Conflict rules | V02, V03 |
| Evidence | S03: Supported inputs / References; S04: §15 Analyze; W11: Assign reference roles |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: Image 1 will be attached externally as the product identity reference; use only visible front and side details..


## Preserve details — `{preserve-details}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Các thuộc tính phải giữ khi đổi scene hoặc style: silhouette, màu, tỷ lệ, logo, chữ hoặc phụ kiện đã xác nhận. |
| Khi dùng | Nhập khi cần bảo toàn form, màu, chữ hoặc các chi tiết quan trọng đã biết. |
| Cách dùng | Liệt kê những chi tiết quan trọng và có nguồn. Dùng mô tả cụ thể như rounded pump hoặc exact label spelling; tránh lời hứa perfect accuracy. |
| Ví dụ minh họa | Keep the ivory body, charcoal pump, rounded shoulder and unprinted body unchanged. |
| Wording pattern | {preserve-details}: Keep the ivory body, charcoal pump, rounded shoulder and unprinted body unchanged. |
| Lỗi thường gặp | Không yêu cầu giữ nguyên màu rồi nhập palette đổi màu sản phẩm. Engraving và logo chưa thấy không được tự thêm. |
| Limits | String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V12 |
| Evidence | S01: Product design lock; S05: §18 Confirmed visual attributes; W11: identity preservation |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: Keep the ivory body, charcoal pump, rounded shoulder and unprinted body unchanged..


## Use case — `{use-case}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Loại nơi sử dụng và yêu cầu chính của output. Nó giúp phân biệt listing image với promotional art. |
| Khi dùng | Luôn chọn đúng mục đích output trước khi Generate; ảnh listing và ad có yêu cầu khác nhau. |
| Cách dùng | Chọn đúng channel intent trước khi chỉnh scene. Google primary listing kích hoạt kiểm tra promotional copy; gallery không tự có cùng toàn bộ policy. |
| Ví dụ minh họa | Campaign advertisement |
| Wording pattern | {use-case}: Campaign advertisement |
| Lỗi thường gặp | Không dùng policy của Google để cấm mọi social ad; lựa chọn này không kiểm chứng image compliance. |
| Limits | String up to 300 characters; no unsafe control characters. Required. |
| Default / blank | Start Blank = empty. Blocking required-field error. |
| UI / override | select; custom False |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V01, V02, V06, V11, V13 |
| Evidence | S01: Platform adaptation / catalog distinction; W02: primary product image; P02: Workflow behavior |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| use-case-v01 | Google Merchant Center primary listing | Ảnh chính của listing Google; ưu tiên nhận diện, tránh promotional overlay. |
| use-case-v02 | Product gallery image | Ảnh bổ sung trong gallery; hỗ trợ context, detail hoặc scale. |
| use-case-v03 | Campaign advertisement | Creative quảng cáo; có thể dùng campaign layout và approved copy. |
| use-case-v04 | Editorial product concept | Concept biên tập; cho phép art direction nhưng giữ product facts. |


## Creative objective — `{creative-objective}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Điều hình ảnh cần làm rõ cho người xem. Khác với mood: objective là nhiệm vụ truyền đạt, mood là cảm giác. |
| Khi dùng | Dùng khi cần một nhiệm vụ truyền đạt rõ ràng cho viewer; có thể để trống nếu chưa biết. |
| Cách dùng | Chọn một priority hoặc nhập custom objective. Nói rõ viewer cần thấy gì: hình dáng, cách dùng, chi tiết, quy mô hoặc một collection. |
| Ví dụ minh họa | Show the product silhouette clearly |
| Wording pattern | {creative-objective}: Show the product silhouette clearly |
| Lỗi thường gặp | Không viết “guarantee sales” hoặc mục tiêu không thể thể hiện bằng hình ảnh. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S01: Creative strategy / Primary objective; S05: §18 Creative Direction |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| creative-objective-v01 | Show the product silhouette clearly | Giúp nhận diện outline và form tổng thể. |
| creative-objective-v02 | Introduce a product launch | Tạo điểm nhìn rõ cho một lần giới thiệu sản phẩm. |
| creative-objective-v03 | Show everyday product context | Cho thấy quan hệ sản phẩm với một bối cảnh thường ngày. |
| creative-objective-v04 | Reveal a specific construction detail | Làm rõ một construction feature do bạn cung cấp. |
| creative-objective-v05 | Show relative size | Tạo quan hệ kích thước tương đối, không đo chính xác. |
| creative-objective-v06 | Explain the included collection | Giúp đọc đủ những món thuộc một bộ đã khai báo. |
| creative-objective-v07 | Create a campaign focal point | Tập trung attention vào subject để xây campaign scene. |


## Audience — `{audience}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Người xem mà creative hướng tới. Audience giúp chọn bối cảnh và mức độ thông tin, không thay đổi identity sản phẩm. |
| Khi dùng | Dùng khi bạn biết nhóm viewer và context liên quan; không cần đoán audience. |
| Cách dùng | Mô tả nhóm người và ngữ cảnh sử dụng có liên quan. Để trống nếu chưa biết; không gán stereotype về hành vi hoặc sở thích. |
| Ví dụ minh họa | People comparing compact desk accessories |
| Wording pattern | {audience}: People comparing compact desk accessories |
| Lỗi thường gặp | Không suy diễn demographic từ hình dáng sản phẩm; không biến audience thành performance claim. |
| Limits | String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S01: Campaign planning / Audience; S05: §18 Target audience |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: People comparing compact desk accessories.


## Placement surface — `{placement-surface}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Bề mặt hoặc điểm đặt sản phẩm: một phần cụ thể của scene. Khác environment là không gian tổng thể. |
| Khi dùng | Dùng khi cần xác định điểm đặt hoặc bề mặt tiếp xúc của sản phẩm. |
| Cách dùng | Chọn bề mặt hỗ trợ mục tiêu và chất liệu. Mô tả texture cụ thể nếu nhập custom; nếu sản phẩm được cầm, ghi vị trí tương ứng. |
| Ví dụ minh họa | A low matte stone plinth |
| Wording pattern | {placement-surface}: A low matte stone plinth |
| Lỗi thường gặp | Không cho một sản phẩm nằm trên hai bề mặt khác nhau ở các field; reflection phải hợp với surface. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S02: §3 Placement / §18 Scene context; S05: Combination grammar; W18: Surface slot |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| placement-surface-v01 | White seamless sweep | Nền trắng liên tục không có đường góc; outline ít bị scene cạnh tranh. |
| placement-surface-v02 | Matte stone plinth | Bệ đá mờ; tạo cao độ và khối hỗ trợ hero object. |
| placement-surface-v03 | Brushed concrete slab | Mặt bê tông chải; thêm texture kiến trúc vào scene. |
| placement-surface-v04 | Warm wood tabletop | Mặt bàn gỗ ấm; giúp đặt sản phẩm vào everyday context. |
| placement-surface-v05 | Raw linen surface | Vải linen thô; thêm weave tự nhiên cho overhead styling. |
| placement-surface-v06 | Smoked glass platform | Bệ kính tối; có thể có reflection cần kiểm soát. |
| placement-surface-v07 | Held in a hand | Điểm tựa là bàn tay; hỗ trợ interaction hoặc relative scale. |


## Environment — `{environment}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Không gian bao quanh subject, gồm địa điểm, background và contextual setting. |
| Khi dùng | Dùng để chọn background hoặc không gian quanh sản phẩm; có thể để trống. |
| Cách dùng | Chọn scene đủ cụ thể nhưng không lấn át sản phẩm. Có thể ghi thời điểm hoặc weather khi ảnh cần outdoor context. |
| Ví dụ minh họa | A quiet home workspace beside a window |
| Wording pattern | {environment}: A quiet home workspace beside a window |
| Lỗi thường gặp | “Empty background” và “busy street full of props” có thể cùng xung đột; ưu tiên một coherent setting. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S02: Location / environmental styling; S05: §18 Location; W03: background workflow |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| environment-v01 | Plain white studio | Studio trắng tối giản; ít contextual information. |
| environment-v02 | Controlled tonal studio | Studio có tông thống nhất; scene có kiểm soát nhưng không nhất thiết trắng. |
| environment-v03 | Home workspace by a window | Workspace có cửa sổ; gợi một everyday use context. |
| environment-v04 | Bathroom counter with daylight | Counter phòng tắm có daylight; chỉ dùng khi phù hợp sản phẩm. |
| environment-v05 | Outdoor running track | Đường chạy ngoài trời; staging năng lượng cho campaign still. |
| environment-v06 | Urban street at dusk | Phố đô thị lúc chạng vạng; cần product vẫn đọc được trong ambient light. |
| environment-v07 | Minimal architectural set | Set kiến trúc tối giản; volume nền hỗ trợ product hero. |


## Props — `{props}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Vật hỗ trợ story, scale hoặc styling nhưng không phải sản phẩm được bán. |
| Khi dùng | Dùng khi cần styling element ngoài những món được bán; để trống nếu không cần. |
| Cách dùng | Ghi tên props và vị trí hoặc vai trò. Phân biệt included bundle contents với styling props trong Product description. Để trống khi không cần props. |
| Ví dụ minh họa | A folded neutral towel behind the bottle, not included in the product |
| Wording pattern | {props}: A folded neutral towel behind the bottle, not included in the product |
| Lỗi thường gặp | Không thêm món khiến khách tưởng thuộc bộ sản phẩm. Với Google primary listing, tránh props ngoài bundle. |
| Limits | String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V11 |
| Evidence | S02: Surrounded by component; S01: Visual production; W15: studio props / group products |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: A folded neutral towel behind the bottle, not included in the product.


## Product arrangement — `{product-arrangement}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Cách xếp một hoặc nhiều sản phẩm và quan hệ của chúng: upright, flat, grouped hoặc trong thao tác. |
| Khi dùng | Dùng để mô tả tư thế một vật hoặc quan hệ giữa các món trong bundle. |
| Cách dùng | Chọn arrangement phù hợp số lượng và geometry. Với group, danh sách món thuộc Product description; arrangement chỉ mô tả cách xếp. |
| Ví dụ minh họa | A spaced group with each included item visible |
| Wording pattern | {product-arrangement}: A spaced group with each included item visible |
| Lỗi thường gặp | Không invent thêm variant để lấp scene. Flat lay cần nhìn từ trên nếu đó là lựa chọn đã nhập. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V08 |
| Evidence | S02: placement / composition; S05: Composition; W15: flat lay / group |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| product-arrangement-v01 | Single upright product | Một vật dựng đứng; silhouette được xem như một unit. |
| product-arrangement-v02 | Single product resting at an angle | Một vật tựa hoặc nghiêng; phải có điểm đỡ hợp lý. |
| product-arrangement-v03 | Overhead flat lay arrangement | Các vật nằm trên mặt phẳng để nhìn từ trên. |
| product-arrangement-v04 | Spaced group of included items | Các món thuộc bộ cách nhau; dễ đọc count và identity. |
| product-arrangement-v05 | Product beside its supplied packaging | Product và packaging đã cung cấp đứng cạnh nhau. |
| product-arrangement-v06 | Product held for size context | Bàn tay giữ sản phẩm để so kích thước tương đối. |


## Shot size — `{shot-size}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Mức độ gần của framing, từ contextual wide shot tới macro crop. Khác camera angle là viewpoint. |
| Khi dùng | Dùng khi quyết định toàn bộ sản phẩm, context hay một chi tiết nên chiếm frame. |
| Cách dùng | Chọn mức gần theo information priority. Nếu detail crop, chỉ ra Detail target; nếu cần nhìn toàn bộ silhouette, tránh crop quá sát. |
| Ví dụ minh họa | Close-up with the whole product visible |
| Wording pattern | {shot-size}: Close-up with the whole product visible |
| Lỗi thường gặp | Close-up không tự đồng nghĩa macro. Crop có thể che label, geometry hoặc bundle contents. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V07 |
| Evidence | S01: Macro detail / shot distance; S05: camera / focus; W15: detail photos |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| shot-size-v01 | Wide contextual shot | Frame rộng có contextual scene; subject có thể nhỏ hơn. |
| shot-size-v02 | Medium product shot | Khoảng framing trung bình; cân bằng product và setting. |
| shot-size-v03 | Close-up with the whole product visible | Cận nhưng vẫn thấy đủ vật; hợp nhận diện toàn bộ. |
| shot-size-v04 | Tight detail crop | Crop một vùng; cần Detail target để tránh chọn ngẫu nhiên. |
| shot-size-v05 | Macro detail view | View cực gần nhằm texture hoặc construction detail đã biết. |


## Camera angle — `{camera-angle}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Vị trí nhìn vào sản phẩm: eye level, above, low hoặc three-quarter. |
| Khi dùng | Dùng khi mặt trước, cạnh, mặt trên hoặc viewpoint cụ thể cần được thể hiện. |
| Cách dùng | Chọn angle bộc lộ mặt quan trọng. Overhead hợp flat lay; three-quarter bộc lộ form. Giữ angle theo reference nếu chưa biết các mặt còn lại. |
| Ví dụ minh họa | Three-quarter view at product level |
| Wording pattern | {camera-angle}: Three-quarter view at product level |
| Lỗi thường gặp | Không coi lens number là camera angle; không invent mặt sau chưa có evidence. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V08 |
| Evidence | S01: Three-quarter angle; S02: Composition terminology; W01: recommended camera angles |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| camera-angle-v01 | Straight-on at product level | Nhìn thẳng ngang độ cao vật; mặt trước nổi bật. |
| camera-angle-v02 | Three-quarter view at product level | Nhìn chéo khoảng ba phần tư; nhiều mặt cùng bộc lộ form. |
| camera-angle-v03 | Overhead top-down | Nhìn từ ngay trên xuống; hợp flat lay. |
| camera-angle-v04 | Low angle | Camera thấp nhìn lên; tăng cảm giác volume nhưng có thể méo. |
| camera-angle-v05 | High angle looking down | Nhìn xuống từ cao; thấy mặt trên mà chưa phải overhead. |
| camera-angle-v06 | Side profile | Nhìn cạnh; làm rõ outline bên hoặc chi tiết edge. |


## Composition — `{composition}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Vị trí focal subject, nhịp xếp vật và phân bố khoảng trống trong frame. |
| Khi dùng | Dùng khi muốn kiểm soát vị trí hero, nhịp layout hoặc vùng trống. |
| Cách dùng | Chọn một layout chính rồi phối với Copy space. Dùng custom để nói vị trí cụ thể; không cần dùng mọi rule of thirds hoặc symmetry cùng lúc. |
| Ví dụ minh họa | Product on the left third with an open right side |
| Wording pattern | {composition}: Product on the left third with an open right side |
| Lỗi thường gặp | Composition không thay đổi aspect ratio. Không yêu cầu centered và left-third cho cùng subject. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V10 |
| Evidence | S01: Negative space / visual hierarchy; S02: Composition; W16: diagonal / C layout |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| composition-v01 | Centered with balanced margins | Subject ở giữa với margins cân bằng. |
| composition-v02 | Product on the left third | Subject ở một phần ba bên trái; bên phải có thể dùng cho copy. |
| composition-v03 | Product on the right third | Subject ở một phần ba bên phải; bên trái có thể dùng cho copy. |
| composition-v04 | Dynamic diagonal | Các đường hoặc vị trí tạo hướng chéo; thêm energy. |
| composition-v05 | C-shaped supporting layout | Supporting elements đi theo hình C quanh hero. |
| composition-v06 | Ordered grid of included items | Các món đã khai báo theo grid có trật tự. |
| composition-v07 | Asymmetric hero composition | Hero lệch trục có chủ đích; cần cân bằng khoảng trống. |


## Focus treatment — `{focus-treatment}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Vùng nào cần sharp và phần nào được phép blur. Đây là visual intent, không phải actual aperture control. |
| Khi dùng | Dùng khi một chi tiết, toàn bộ vật hoặc mọi món trong bộ cần readable. |
| Cách dùng | Nêu detail cần nét. Khi toàn bộ product hoặc group quan trọng, giữ các món đọc được. Shallow background focus chỉ giảm độ rõ background. |
| Ví dụ minh họa | Whole product sharp with a softly separated background |
| Wording pattern | {focus-treatment}: Whole product sharp with a softly separated background |
| Lỗi thường gặp | Không dùng blur để che lỗi label; không hứa lens hoặc focus stacking đã chạy. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S05: Depth of field / photorealism; S03: Composition; W15: sharpness / focus stacking |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| focus-treatment-v01 | Whole product sharp | Toàn bộ sản phẩm được ưu tiên sharp. |
| focus-treatment-v02 | Whole product sharp with a softly separated background | Product sharp; background blur nhẹ giúp separation. |
| focus-treatment-v03 | Selected detail sharp with gentle falloff | Chi tiết chọn được sharp; vùng khác falloff nhẹ. |
| focus-treatment-v04 | All included products readable | Mỗi món trong bộ đều đủ rõ để đọc inventory. |
| focus-treatment-v05 | Deep scene focus | Scene có vùng rõ rộng; không có cam kết aperture thật. |


## Lighting style — `{lighting-style}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Tính chất của illumination: diffuse, directional, rim hoặc daylight. Khác Light direction là hướng nguồn. |
| Khi dùng | Dùng khi light quality cần làm rõ form hoặc surface đã cung cấp. |
| Cách dùng | Chọn light quality phục vụ form và material. Soft light tạo chuyển tiếp nhẹ; rim emphasis làm cạnh nổi nhưng vẫn cần product đọc được. |
| Ví dụ minh họa | Soft diffused studio key with gentle fill |
| Wording pattern | {lighting-style}: Soft diffused studio key with gentle fill |
| Lỗi thường gặp | Không coi “cinematic” là lighting plan đầy đủ; tránh overexposure ở labels hoặc highlights. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V09 |
| Evidence | S01: rim/key lighting; S02: lighting component; W18: Lighting slot |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| lighting-style-v01 | Soft diffused studio key with gentle fill | Key khuếch tán và fill nhẹ; chuyển tiếp sáng tối mềm. |
| lighting-style-v02 | Broad high-key illumination | Nguồn sáng rộng, scene sáng; vẫn giữ highlight detail. |
| lighting-style-v03 | Window daylight with gentle fill | Daylight từ cửa sổ với fill nhẹ; ambience tự nhiên. |
| lighting-style-v04 | Directional key with controlled fill | Key có hướng và fill có kiểm soát; form/texture rõ. |
| lighting-style-v05 | Rim-accent lighting with a readable front | Light nhấn cạnh và giữ mặt trước readable. |
| lighting-style-v06 | Hard directional light | Light cứng có hướng; shadow edge rõ nếu scene phù hợp. |


## Light direction — `{light-direction}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Hướng chính của illumination tương đối với camera và subject. |
| Khi dùng | Dùng khi hướng key light quan trọng với volume, texture hoặc highlight. |
| Cách dùng | Chọn hướng giúp nhận ra volume hoặc texture. Dùng camera-left/right thay vì “left” không rõ hệ quy chiếu. |
| Ví dụ minh họa | Camera-left at a gentle side angle |
| Wording pattern | {light-direction}: Camera-left at a gentle side angle |
| Lỗi thường gặp | Không yêu cầu mọi shadow đi theo hướng ngược light mà không có fill hoặc second source. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S01: Visual production / light direction; S02: Lighting grammar; W16: side-light setup |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| light-direction-v01 | Camera-left side light | Key từ trái camera; một phía form được nhấn. |
| light-direction-v02 | Camera-right side light | Key từ phải camera; shadow relationship đổi theo. |
| light-direction-v03 | Front and slightly above | Key phía trước hơi cao; mặt trước đọc rõ hơn. |
| light-direction-v04 | Back edge with frontal fill | Light cạnh sau cộng fill trước; edge tách khỏi nền. |
| light-direction-v05 | Top light with side fill | Light từ trên với fill bên; mặt trên và cạnh vẫn readable. |


## Shadow treatment — `{shadow-treatment}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Mức độ hiện và hardness của shadows hoặc contact shadow. |
| Khi dùng | Dùng khi shadow cần nâng đỡ contact hoặc đóng vai trò graphic trong scene. |
| Cách dùng | Chọn shadow có vai trò grounding, dimension hoặc graphic rhythm. Khi no visible shadow, hiểu đó là intent cần post-processing hoặc output review. |
| Ví dụ minh họa | Soft contact shadow grounding the product |
| Wording pattern | {shadow-treatment}: Soft contact shadow grounding the product |
| Lỗi thường gặp | Không yêu cầu physically grounded look nhưng cấm mọi contact cue mà không chấp nhận stylization. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V09 |
| Evidence | S02: controlled shadow / lighting grammar; S05: realism; W16: assessing shadows |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| shadow-treatment-v01 | Soft contact shadow | Shadow tiếp xúc mềm; giúp vật có điểm đặt. |
| shadow-treatment-v02 | Subtle directional shadow | Shadow có hướng nhưng nhẹ; hỗ trợ volume. |
| shadow-treatment-v03 | Crisp graphic shadow | Shadow sắc có hình graphic; cần nguồn sáng phù hợp. |
| shadow-treatment-v04 | Deep controlled shadows | Shadow sâu nhưng có kiểm soát; tránh mất product detail. |
| shadow-treatment-v05 | Minimal visible shadow | Ít shadow thấy được; không có nghĩa vật không có support. |


## Material emphasis — `{material-emphasis}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Bề mặt hoặc optical detail cần nhấn mạnh trong depiction. Không phải quyền đổi vật liệu của sản phẩm. |
| Khi dùng | Dùng để nhấn finish hoặc texture có thật, nhất là glass, fabric và reflective surfaces. |
| Cách dùng | Chọn feature đã có trong Product description hoặc reference. Dùng custom để nêu highlight behavior hoặc stitching; giữ material identity. |
| Ví dụ minh họa | Controlled reflections on the supplied glass finish |
| Wording pattern | {material-emphasis}: Controlled reflections on the supplied glass finish |
| Lỗi thường gặp | Không đổi matte thành mirror finish để đạt luxury; glass transparency chưa thấy phải xác minh. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S01: verified materials; S02: material reflectivity / reflections; S05: texture vocabulary |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| material-emphasis-v01 | Natural matte texture | Ưu tiên texture mờ có thật; không thêm gloss. |
| material-emphasis-v02 | Controlled reflective highlights | Highlights phản xạ có kiểm soát; chỉ cho finish đã cung cấp. |
| material-emphasis-v03 | Readable glass edges and label | Edge kính và label vẫn readable; không invent nhãn. |
| material-emphasis-v04 | Fine stitching or construction texture | Làm rõ stitch hoặc construction texture đã biết. |
| material-emphasis-v05 | Consistent fabric weave | Weave vải nhất quán; không tạo pattern vật lý mới. |
| material-emphasis-v06 | Authentic surface without added gloss | Giữ surface thật; không áp finish nhân tạo lên product. |


## Scene palette — `{palette}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Màu của environment, props và overall scene; product color vẫn theo identity đã cung cấp. |
| Khi dùng | Dùng để điều hướng màu của scene; màu product vẫn lấy từ supplied facts. |
| Cách dùng | Chọn palette bổ trợ product hoặc nhập background/accent cụ thể. Hãy nói rõ palette applies to scene nếu product color phải giữ. |
| Ví dụ minh họa | Warm ivory scene with restrained charcoal accents |
| Wording pattern | {palette}: Warm ivory scene with restrained charcoal accents |
| Lỗi thường gặp | Không yêu cầu palette tự nhuộm lại product; neon light có thể gây color cast cần review. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S02: Scene colors; S05: §18 Color palette; S01: colorway lock |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| palette-v01 | Neutral white and gray scene | Scene trắng/xám; product color vẫn riêng. |
| palette-v02 | Warm ivory and charcoal scene | Scene ivory/charcoal ấm; tạo contrast restrained. |
| palette-v03 | Tonal stone and beige scene | Scene tông đá/beige; hỗ trợ staging sculptural. |
| palette-v04 | Deep navy and restrained silver scene | Scene navy với accents silver hạn chế; finish product không đổi. |
| palette-v05 | Muted natural greens and browns | Scene green/brown muted; tạo natural context. |
| palette-v06 | Bold complementary scene accents | Accents scene có màu bổ túc rõ; tránh recolor product. |


## Mood — `{mood}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Cảm giác mà image cần gợi, như calm hoặc energetic. |
| Khi dùng | Dùng khi cần cảm giác cụ thể; mood không thay thế lighting hoặc objective. |
| Cách dùng | Dùng một cảm giác chính rồi biến nó thành lighting, composition và palette cụ thể. Mood không tự cung cấp đầy đủ scene. |
| Ví dụ minh họa | Calm and approachable |
| Wording pattern | {mood}: Calm and approachable |
| Lỗi thường gặp | Không nối chuỗi “luxury cinematic premium epic” khi chúng không thêm decision cụ thể. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S01: emotion and strategy; S02: design mood; S05: §18 Mood |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| mood-v01 | Clear and informative | Cảm giác rõ ràng để đọc thông tin. |
| mood-v02 | Calm and approachable | Ambience yên và gần gũi. |
| mood-v03 | Refined and restrained | Cảm giác tinh tế với ít distraction. |
| mood-v04 | Energetic and purposeful | Energy có mục tiêu; không tạo performance claim. |
| mood-v05 | Playful and bright | Ambience tươi và vui; vẫn giữ hierarchy product. |
| mood-v06 | Precise and tactile | Tập trung cảm giác texture và construction precision. |


## Visual treatment — `{visual-treatment}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Cách hình ảnh nên trông được sản xuất: commercial photo, lifestyle, editorial hoặc stylized composite. |
| Khi dùng | Dùng để chọn look ảnh tổng thể phù hợp commercial, lifestyle hoặc editorial task. |
| Cách dùng | Chọn treatment nhất quán với use-case. Stylized concept có thể dùng cho campaign nhưng không tự là compliant depiction cho listing. |
| Ví dụ minh họa | Photorealistic commercial product photography |
| Wording pattern | {visual-treatment}: Photorealistic commercial product photography |
| Lỗi thường gặp | Treatment “photorealistic” không bảo đảm geometry hoặc chữ đúng; cần actual-output evaluation. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S02: Professional Product Photography; S05: style handling; S03: art direction |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| visual-treatment-v01 | Photorealistic commercial product photography | Look ảnh thương mại realistic; không chứng minh photo là thật. |
| visual-treatment-v02 | Natural lifestyle photography | Look lifestyle tự nhiên; context dễ nhận biết. |
| visual-treatment-v03 | Editorial still-life photography | Still life biên tập; staging có chủ đích. |
| visual-treatment-v04 | Graphic commercial photography | Look commercial graphic; hình khối/layout rõ. |
| visual-treatment-v05 | Stylized photographic campaign composite | Concept composite photographic stylized; không hứa provenance ảnh thật. |


## Interaction or action — `{interaction-action}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Điều người hoặc vật đang làm với sản phẩm, hoặc action cue trong một ảnh tĩnh. |
| Khi dùng | Dùng cho thao tác bàn tay, interaction hoặc action cue trong một still image. |
| Cách dùng | Ghi một hành động cụ thể với contact/hand position rõ. Với dynamic still, nêu freeze-frame cue thay vì shot sequence hoặc video script. |
| Ví dụ minh họa | A hand holds the bottle beside a familiar notebook; fingers leave the product unobstructed. |
| Wording pattern | {interaction-action}: A hand holds the bottle beside a familiar notebook; fingers leave the product unobstructed. |
| Lỗi thường gặp | Không thêm products vào person-only reference; trong Product workflow, subject vẫn là supplied product. |
| Limits | String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S06: hand placement and pose; S05: sport/performance / motion cues; S01: Lifestyle context |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: A hand holds the bottle beside a familiar notebook; fingers leave the product unobstructed..


## Detail target — `{detail-target}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Bộ phận cần xem kỹ trong macro hoặc detail image. |
| Khi dùng | Nhập khi muốn inspect một feature; đặc biệt hữu ích cho macro hoặc tight crop. |
| Cách dùng | Ghi khu vực có evidence: seam, pump, engraving hoặc finish. Ghép với Shot size và Focus treatment, không tự thay angle. |
| Ví dụ minh họa | The join between the pump head and bottle shoulder |
| Wording pattern | {detail-target}: The join between the pump head and bottle shoulder |
| Lỗi thường gặp | Không crop tới detail chưa thấy hoặc invented construction. Không biến material detail thành performance claim. |
| Limits | String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | Advisory when shot-size = Tight detail crop or Macro detail view. |
| Conflict rules | V02, V07 |
| Evidence | S01: Macro detail; S05: Texture; W15: specific detail features |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: The join between the pump head and bottle shoulder.


## Scale cue — `{scale-cue}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Vật hoặc ngữ cảnh so sánh kích thước tương đối để viewer hiểu product scale. |
| Khi dùng | Dùng khi cần quan hệ kích thước tương đối; không dùng làm bằng chứng đo chính xác. |
| Cách dùng | Dùng familiar object hoặc measured relation biết chắc. Nếu chỉ concept, ghi approximate contextual scale; không thêm số đo chưa có. |
| Ví dụ minh họa | Approximate contextual scale beside an ordinary hand; not a measured size claim. |
| Wording pattern | {scale-cue}: Approximate contextual scale beside an ordinary hand; not a measured size claim. |
| Lỗi thường gặp | Tỷ lệ trong generation có thể sai. Khi catalogue cần kích thước chính xác, cần reference/số đo và kiểm tra output. |
| Limits | String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | Recommended for scale-focused profile; never proof of measured accuracy. |
| Conflict rules | V02, V14 |
| Evidence | W15: Scale photography; W16: Lifestyle size context; S06: person-product interaction |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: Approximate contextual scale beside an ordinary hand; not a measured size claim..


## Copy treatment — `{copy-treatment}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Quy tắc đối với chữ thêm vào hình: không thêm, reserve space để thêm sau, hoặc render supplied copy. Physical label thuộc Preserve details. |
| Khi dùng | Chọn khi cần phân biệt không thêm text, chừa chỗ cho designer hoặc render approved copy. |
| Cách dùng | Chọn reserve space khi muốn typography được thêm ở design tool sau. Render supplied copy bắt buộc Exact copy. Không nhập offer chưa được xác nhận. |
| Ví dụ minh họa | Reserve space for later copy |
| Wording pattern | {copy-treatment}: Reserve space for later copy |
| Lỗi thường gặp | Không cấm physical product label bằng “no text”; phân biệt added copy và packaging text. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select; custom False |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02, V04, V05, V06, V13 |
| Evidence | S01: Headline / CTA / verified offer; W18: typography step; W02: promotional-overlay restrictions |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| copy-treatment-v01 | No added copy | Không thêm text vào image; label vật lý cung cấp vẫn giữ. |
| copy-treatment-v02 | Reserve space for later copy | Chừa vùng để designer thêm copy sau; không render copy lúc tạo ảnh. |
| copy-treatment-v03 | Render supplied copy | Yêu cầu render chuỗi Exact copy đã được duyệt; spelling cần kiểm tra. |


## Copy space — `{copy-space}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Vùng sạch dành cho layout hoặc khoảng thở. Không phải nội dung chữ. |
| Khi dùng | Dùng khi cần vùng thoáng cho text hoặc breathing room; kiểm tra với Composition. |
| Cách dùng | Chọn vị trí thống nhất với Composition và aspect ratio. Khi không cần layout, để trống. Đây không phải pixel-safe-zone guarantee. |
| Ví dụ minh họa | Uncluttered right third |
| Wording pattern | {copy-space}: Uncluttered right third |
| Lỗi thường gặp | Không nói right third trống nhưng đặt subject ở right third; platform UI safe zones phải được kiểm tra ở generator/layout. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select + separate text input for custom replacement; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | Recommended with Reserve space for later copy; may still be used as breathing room. |
| Conflict rules | V02, V10 |
| Evidence | S01: Negative space / safe zones; S02: Negative space; S05: ad layout |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| copy-space-v01 | Uncluttered right third | Vùng bên phải tránh subject/props để có chỗ đọc copy. |
| copy-space-v02 | Uncluttered left third | Vùng bên trái tránh subject/props để có chỗ đọc copy. |
| copy-space-v03 | Open upper area | Vùng trên thoáng; cần kiểm tra crop của channel. |
| copy-space-v04 | Open lower area | Vùng dưới thoáng; không mặc định safe zone platform. |
| copy-space-v05 | Generous balanced breathing room | Khoảng thở cân bằng; không phải slot text có tọa độ cố định. |


## Exact copy — `{exact-copy}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Chữ được user cung cấp để render hoặc ghi chú cho layout sau. Compiler không sáng tác headline, giá hoặc offer. |
| Khi dùng | Bắt buộc khi Render supplied copy; tùy chọn cho note hậu kỳ; không nhập khi No added copy. |
| Cách dùng | Nhập đúng spelling/punctuation. Giữ intentional whitespace; chỉ chuẩn hóa line endings. Render mode sẽ giữ text; reserve mode đánh dấu copy dành cho post-production. |
| Ví dụ minh họa | A SIMPLE DAILY RITUAL |
| Wording pattern | {exact-copy}: A SIMPLE DAILY RITUAL |
| Lỗi thường gặp | Không tự dịch hoặc thêm CTA. Chữ trên label vật lý nên ghi trong Preserve details; exact typography phải review. |
| Limits | String up to 240 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Preserve exact interior copy and spacing; normalize CRLF/CR to LF; all-whitespace is blank. |
| Dependencies | Required for Render supplied copy; forbidden when No added copy; optional post-production note for Reserve space for later copy. |
| Conflict rules | V02, V04, V05 |
| Evidence | S01: verified headline / offer / engraving; W18: typography production; W05: text fidelity limitations |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: A SIMPLE DAILY RITUAL.


## Aspect ratio — `{aspect-ratio}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Tỷ lệ width:height của composition mong muốn. Đây là brief intent, không phải actual API size setting. |
| Khi dùng | Dùng khi biết orientation hoặc format của layout; không tự đặt output pixels. |
| Cách dùng | Chọn trước khi bố trí subject và copy-space. Sau khi copy prompt sang generator, đặt ratio/size tương ứng ở tool nếu hỗ trợ. |
| Ví dụ minh họa | 4:5 |
| Wording pattern | {aspect-ratio}: 4:5 |
| Lỗi thường gặp | Không nói prompt tự tạo file có đúng ratio; không dùng universal --ar hoặc dimensions từ model khác. |
| Limits | String up to 300 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | select; custom False |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S01: Output format; S03: Aspect ratio; S05: platform and ratio |
| Status | Proposed; source-supported usage; image outcome untested |

| Value ID | Stored value | Meaning / intended visual effect |
| --- | --- | --- |
| aspect-ratio-v01 | 1:1 | Frame vuông, chiều rộng bằng chiều cao. |
| aspect-ratio-v02 | 4:5 | Frame dọc, rộng 4 và cao 5 đơn vị tương đối. |
| aspect-ratio-v03 | 9:16 | Frame dọc cao, rộng 9 và cao 16 đơn vị. |
| aspect-ratio-v04 | 16:9 | Frame ngang rộng, rộng 16 và cao 9 đơn vị. |
| aspect-ratio-v05 | 3:2 | Frame ngang photographic, rộng 3 và cao 2 đơn vị. |


## Exclusions — `{exclusions}`

| Knowledge-base item | Explanation |
| --- | --- |
| Là gì / purpose | Những thứ không được thêm hoặc cần tránh trong generated image. Được viết bằng ngôn ngữ tự nhiên, không phải negative_prompt API. |
| Khi dùng | Dùng khi có những lỗi hoặc additions cần tránh; để trống nếu không có constraint bổ sung. |
| Cách dùng | Ghi các rủi ro có liên quan: invented logo, extra products, watermark hoặc distorted hands. Dùng constraints cụ thể và tránh phủ định quá rộng. |
| Ví dụ minh họa | No invented logos, extra products, added watermark or altered product geometry. |
| Wording pattern | {exclusions}: No invented logos, extra products, added watermark or altered product geometry. |
| Lỗi thường gặp | Không dùng “no text” nếu label cần giữ; không kỳ vọng negative wording là bộ lọc chắc chắn. |
| Limits | String up to 800 characters; no unsafe control characters. Optional unless a dependency makes it required. |
| Default / blank | Start Blank = empty. Omit this field clause; never restore preset default. |
| UI / override | textarea; custom True |
| Normalization | Unicode NFC; collapse whitespace; trim; preserve case and user wording. |
| Dependencies | None |
| Conflict rules | V02 |
| Evidence | S01: Quality control / constraints; S03: Output restrictions; S05: fidelity |
| Status | Proposed; source-supported usage; image outcome untested |

Free text accepts user wording within limits. The example is illustrative, not an allowed-value restriction. Starter suggestion: No invented logos, extra products, added watermark or altered product geometry..


## Source key
| ID | Title | Source |
| --- | --- | --- |
| S00 | Adaptive Visual Workflow Research & Creative Configuration Council | supplied project/sample |
| S01 | Pixie — AI Product Creative Director reconstruction | supplied project/sample |
| S02 | Product Photo Prompt Generator reconstruction | supplied project/sample |
| S03 | ImgPrompts image-prompt copilot reconstruction | supplied project/sample |
| S04 | Image Prompt Translator reconstruction | supplied project/sample |
| S05 | Product Image Prompt Optimizer reconstruction | supplied project/sample |
| S06 | Product Ad Variation Prompt Generator reconstruction | supplied project/sample |
| S07 | Compiled prompting and platform resource notes | supplied project/sample |
| P01 | Product and Project Brief | supplied project/sample |
| P02 | Product and Functional Requirements Specification | supplied project/sample |
| P03 | Domain State and Data Design | supplied project/sample |
| P04 | Frontend Architecture and ADRs | supplied project/sample |
| W01 | Taking product photographs | https://help.shopify.com/en/manual/products/product-media/product-photography |
| W02 | Image link [image_link] | https://support.google.com/merchants/answer/6324350?hl=en |
| W03 | AI-generated backgrounds for product photography | https://www.adobe.com/products/firefly/discover/ai-generated-backgrounds-for-product-photography.html |
| W04 | Creative best practices for performance ads | https://ads.tiktok.com/resources/help/article/creative-best-practices |
| W05 | 7 tips to get the most out of Nano Banana Pro | https://blog.google/products-and-platforms/products/gemini/prompting-tips-nano-banana-pro/ |
| W06 | Omni Reference | https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference |
| W07 | Edit Model | https://docs.midjourney.com/hc/en-us/articles/48495453462797-Edit-Model |
| W08 | Craft character likeness and cinematic posters in Boards | https://www.adobe.com/learn/firefly/web/create-cinematic-posters-consistent-characters |
| W09 | How to use lighting for portrait photography | https://www.adobe.com/creativecloud/photography/discover/portrait-lighting.html |
| W10 | AI sticker generator | https://www.adobe.com/products/firefly/features/sticker-generator.html |
| W11 | Image prompting | https://developers.openai.com/api/docs/guides/image-prompting |
| W12 | Landscape photography tips for beginners | https://www.adobe.com/creativecloud/photography/type/landscape-photography.html |
| W13 | Generate images from text in Adobe Firefly | https://www.adobe.com/learn/firefly/web/generate-image-with-text |
| W14 | Version | https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version |
| W15 | Product Photography A DIY Guide for Beginners | https://www.shopify.com/blog/12206313-the-ultimate-diy-guide-to-beautiful-product-photography |
| W16 | The Complete Guide to Ecommerce Photography | https://www.shopify.com/blog/ecommerce-photography |
| W17 | Flat lay photography A beginners guide | https://www.adobe.com/creativecloud/photography/type/flat-lay-photography.html |
| W18 | One Product Shot a Full Campaign with AI | https://www.adobe.com/in/products/firefly/discover/ai-product-photography.html |
