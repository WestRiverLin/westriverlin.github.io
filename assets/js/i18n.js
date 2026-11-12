(function () {
  "use strict";

  var STRINGS = {
    // Shared
    "brand": {
      zh: "林尚靖",
      en: "Shangjing Lin",
      ja: "林尚靖"
    },
    "brand.sub": {
      zh: "技术美术 / Technical Artist",
      en: "Technical Artist",
      ja: "テクニカルアーティスト"
    },
    "title": {
      zh: "林尚靖 | 技术美术 · 独立游戏开发者",
      en: "Shangjing Lin | Technical Artist · Indie Game Developer",
      ja: "林尚靖 | テクニカルアーティスト · インディーゲーム開発者"
    },
    "footer.title": {
      zh: "林尚靖 | 技术美术",
      en: "Shangjing Lin | Technical Artist",
      ja: "林尚靖 | テクニカルアーティスト"
    },
    "footer.tagline": {
      zh: "渲染 · 工具 · 移动端性能优化",
      en: "Rendering · Tools · Mobile Performance Optimization",
      ja: "レンダリング · ツール · モバイル性能最適化"
    },
    "back.works": {
      zh: "← 返回个人作品",
      en: "← Back to Personal Works",
      ja: "← 個人作品に戻る"
    },
    "back.projects": {
      zh: "← 返回项目经历",
      en: "← Back to Projects",
      ja: "← プロジェクトに戻る"
    },
    "back.tech": {
      zh: "← 返回工作内容精选",
      en: "← Back to Selected Work",
      ja: "← 仕事のハイライトに戻る"
    },
    "detail": {
      zh: "查看详情 →",
      en: "View details →",
      ja: "詳細を見る →"
    },
    "badge.tap": {
      zh: "TapTap 已上线",
      en: "Live on TapTap",
      ja: "TapTapで配信中"
    },
    "badge.video": {
      zh: "可观看视频",
      en: "Watch video",
      ja: "動画あり"
    },
    "badge.playable": {
      zh: "可在线游玩",
      en: "Playable online",
      ja: "オンラインで遊べる"
    },

    // Home page
    "i.name": {
      zh: "林尚靖",
      en: "Shangjing Lin",
      ja: "林尚靖"
    },
    "i.role": {
      zh: "技术美术 · 独立游戏开发者<br>渲染 · 工具 · 移动端性能优化",
      en: "Technical Artist · Indie Game Developer<br>Rendering · Tools · Mobile Performance Optimization",
      ja: "テクニカルアーティスト · インディーゲーム開発者<br>レンダリング · ツール · モバイル性能最適化"
    },
    "i.company": {
      zh: "网易游戏 · 天下事业部",
      en: "NetEase Games · Tianxia Studio",
      ja: "ネットイースゲームズ · 天下スタジオ"
    },
    "i.contact.email": { zh: "邮箱", en: "Email", ja: "メール" },
    "i.edu.title": { zh: "教育背景", en: "Education", ja: "学歴" },
    "i.edu1.title": {
      zh: "华中师范大学 · 数字媒体技术<br>本科",
      en: "Central China Normal University · Digital Media Technology<br>Bachelor's",
      ja: "華中師範大学 · デジタルメディア技術<br>学士"
    },
    "i.edu1.desc": {
      zh: "GPA 3.6 / 4.0 · 排名 1 / 33",
      en: "GPA 3.6 / 4.0 · Rank 1 / 33",
      ja: "GPA 3.6 / 4.0 · 順位 1 / 33"
    },
    "i.edu2.title": {
      zh: "新加坡南洋理工大学<br>创新创业短期交流",
      en: "Nanyang Technological University<br>Innovation & Entrepreneurship Exchange",
      ja: "南洋理工大学<br>イノベーション・起業 短期交流"
    },
    "i.edu2.desc": {
      zh: "模拟创业比赛 · 获最佳团队奖",
      en: "Startup simulation · Best Team Award",
      ja: "模擬起業コンテスト · 最優秀チーム賞"
    },
    "i.edu3.title": {
      zh: "美国加州大学洛杉矶分校<br>Summer School",
      en: "UCLA<br>Summer School",
      ja: "カリフォルニア大学ロサンゼルス校<br>サマースクール"
    },
    "i.edu3.desc": {
      zh: "编程与动画课程",
      en: "Programming & animation courses",
      ja: "プログラミングとアニメーションのコース"
    },
    "i.skills.title": { zh: "核心技能", en: "Core Skills", ja: "主要スキル" },
    "i.skills.g1": { zh: "引擎与渲染", en: "Engines & Rendering", ja: "エンジンとレンダリング" },
    "i.skills.g2": { zh: "工具与编程", en: "Tools & Programming", ja: "ツールとプログラミング" },
    "i.skills.g3": { zh: "美术软件", en: "DCC Software", ja: "DCCソフトウェア" },
    "i.skills.cartoon": { zh: "卡通渲染", en: "Stylized Rendering", ja: "トゥーンレンダリング" },
    "i.skills.crossengine": { zh: "跨引擎移植", en: "Cross-Engine Porting", ja: "クロスエンジン移植" },
    "i.skills.tooldev": { zh: "美术工具开发", en: "Art Tool Development", ja: "アートツール開発" },
    "i.about.title": { zh: "关于我", en: "About Me", ja: "自己紹介" },
    "i.about.summary": {
      zh: "热爱游戏行业，兼具技术美术与独立游戏开发能力，拥有 <strong>8 年以上技术美术经验</strong>。作为 <strong>独立游戏开发者</strong>，一人使用 TapTap Maker 从 0 到 1 完成并上线《原胞：进化》，并独立开发 6 款以上可玩 Demo。先后使用 Unity、BigWorld、Messiah 等引擎参与多款已上线项目，擅长 <strong>Shader 编写、卡通渲染、PBR 流程与移动端性能优化</strong>；<strong>了解大模型后训练（SFT / RLHF / RL）</strong>，并自研 AI 贴图重绘工具落地到美术流程。作为《不休的乌拉拉》项目组<strong>唯一技术美术</strong>，<strong>从 0 到 1 独立负责全部技术美术</strong>，并带教 2 名新人 / 实习生，<strong>有一定的管理经验</strong>。资深主机与掌机玩家，拥有 3DS、Switch、PS5 等设备，Steam 游戏数 1000+。",
      en: "Passionate about games, with <strong>8+ years of technical art experience</strong> and independent game development experience. As an <strong>indie game developer</strong>, I built and shipped <strong>Cell: Evolution</strong> solo from 0 to 1 using TapTap Maker, and developed 6+ playable demos on my own. Skilled in <strong>shader development, stylized rendering, PBR pipelines, and mobile performance optimization</strong> across Unity, BigWorld, and Messiah; <strong>familiar with LLM post-training (SFT / RLHF / RL)</strong> and built an in-house AI texture-redraw tool used in production. As the <strong>only technical artist</strong> on Ulala: Idle Adventure, I <strong>independently owned the full technical-art scope from 0 to 1</strong> and mentored 2 juniors / interns, <strong>with some management experience</strong>. A long-time console and handheld player with a 3DS, Switch, PS5, and a 1000+ Steam library.",
      ja: "ゲームを愛し、<strong>8年以上のテクニカルアート経験</strong>とインディーゲーム開発経験を持つ。<strong>インディーゲーム開発者</strong>として、TapTap Makerで『原胞：進化』を一人で0から1まで開発・リリースし、6本以上のプレイ可能なデモを独自に制作。Unity、BigWorld、Messiahなどで複数のリリース済みタイトルに携わり、<strong>シェーダー開発、トゥーンレンダリング、PBRパイプライン、モバイル性能最適化</strong>を得意とする。<strong>大規模モデルのポストトレーニング（SFT / RLHF / RL）を理解</strong>し、実運用に活用した自社製AIテクスチャ再描画ツールを開発。『ウララ』ではチーム<strong>唯一のテクニカルアーティスト</strong>として<strong>全工程を0から1で担当</strong>し、新人／インターン2名を指導<strong>、一定のマネジメント経験あり</strong>。3DS、Switch、PS5とSteamゲーム1000本以上を所有するコンソール／携帯機プレイヤー。"
    },
    "i.exp.title": { zh: "工作经历", en: "Experience", ja: "職歴" },
    "i.exp1.title": {
      zh: "广州网易互娱 · 天下事业部 — 技术美术",
      en: "NetEase Games · Tianxia Studio — Technical Artist",
      ja: "ネットイースゲームズ · 天下スタジオ — テクニカルアーティスト"
    },
    "i.exp1.b1": {
      zh: "使用网易自研 <strong>BigWorld、Messiah</strong> 引擎，参与《天下3》《天下移动版》《天下贰》《天下：万象》，负责材质效果（场景氛围、时装、坐骑、后处理、天气与地形等）。",
      en: "Worked with NetEase's in-house <strong>BigWorld and Messiah</strong> engines on Tianxia 3, Tianxia Mobile, Tianxia 2, and Tianxia: The World, responsible for materials and effects such as scene atmosphere, costumes, mounts, post-processing, weather, and terrain.",
      ja: "ネットイース自社製の<strong>BigWorld・Messiah</strong>エンジンで『天下3』『天下モバイル』『天下2』『天下：万象』に携わり、シーン演出、衣装、マウント、ポストプロセス、天候、地形などのマテリアル表現を担当。"
    },
    "i.exp1.b2": {
      zh: "开发引擎与美术工具：AI 自动化贴图重绘、Shader 分析管理、资源转换等工具。",
      en: "Built engine and art tools, including AI texture redraw automation, shader analysis management, and asset conversion tools.",
      ja: "AI自動テクスチャ再描画、シェーダー解析管理、アセット変換などのエンジン／アートツールを開発。"
    },
    "i.exp1.b3": {
      zh: "参与跨引擎移植「开天计划」，自研两套美术资源跨引擎移植方案，并申请获得专利。",
      en: "Contributed to the cross-engine porting project \"Project Kaitian\", designing two cross-engine art-asset porting solutions that were filed as patents.",
      ja: "クロスエンジン移植「開天計画」に参加し、2つのアートアセット移植ソリューションを設計、特許を申請・取得。"
    },
    "i.exp1.b4": {
      zh: "带教 2 名新人 / 实习生，负责其技术美术方向的工作指导与任务拆解。",
      en: "Mentored 2 juniors / interns, handling their technical-art onboarding and task breakdown.",
      ja: "新人／インターン2名を指導し、テクニカルアート分野のオンボーディングとタスク分解を担当。"
    },
    "i.exp2.title": {
      zh: "厦门真有趣信息科技有限公司 — 技术美术",
      en: "Xiamen Zhenyouqu Information Technology — Technical Artist",
      ja: "厦門真有趣信息科技 — テクニカルアーティスト"
    },
    "i.exp2.b1": {
      zh: "参与《不休的乌拉拉》：从 0 到 1 负责全部技术美术（Shader 编写、美术规范制定、美术工具开发、性能优化），并推动美术规范在团队落地，项目从 DEMO 到海内外上线全流程跟进。",
      en: "On Ulala: Idle Adventure, as the team's only technical artist, owned the full technical-art scope from 0 to 1—shaders, art standards, tooling, and performance optimization—rolled out art standards across the team, and followed the project from demo to global launch.",
      ja: "『ウララ：アイドルアドベンチャー』でチーム唯一のテクニカルアーティストとして、シェーダー、制作規約、ツール開発、性能最適化のすべてを0から1で担当。制作規約をチームに浸透させ、デモから国内外リリースまで一貫して担当。"
    },
    "i.exp3.title": {
      zh: "武汉渲奇数字科技有限公司 — 客户端程序（实习）",
      en: "Wuhan Xuanqi Digital Technology — Client Programmer (Intern)",
      ja: "武漢渲奇デジタル科技 — クライアントプログラマー（インターン）"
    },
    "i.exp3.b1": {
      zh: "使用虚幻引擎参与 VR 房地产楼盘演示项目开发。",
      en: "Developed a VR real-estate demonstration project using Unreal Engine.",
      ja: "Unreal EngineでVR不動産デモプロジェクトの開発に参加。"
    },
    "i.proj.title": { zh: "项目经历", en: "Projects", ja: "プロジェクト" },
    "i.proj1.title": {
      zh: "《天下3》《天下移动版》《天下贰》《天下：万象》",
      en: "Tianxia 3 / Tianxia Mobile / Tianxia 2 / Tianxia: The World",
      ja: "『天下3』『天下モバイル』『天下2』『天下：万象』"
    },
    "i.proj1.b1": {
      zh: "使用网易自研 <strong>BigWorld、Messiah</strong> 引擎，负责开发材质效果，包括场景氛围、时装、坐骑、后处理、天气与地形方案等。",
      en: "Developed material effects on NetEase's <strong>BigWorld and Messiah</strong> engines, including scene atmosphere, costumes, mounts, post-processing, weather, and terrain.",
      ja: "ネットイース自社製の<strong>BigWorld・Messiah</strong>エンジンで、シーン演出、衣装、マウント、ポストプロセス、天候、地形などのマテリアル表現を開発。"
    },
    "i.proj1.b2": {
      zh: "开发引擎工具与美术工具，包括 AI 自动化贴图重绘工具、Shader 分析管理工具、资源转换工具等。",
      en: "Built engine and art tools including AI texture redraw automation, shader analysis management, and asset conversion.",
      ja: "AI自動テクスチャ再描画、シェーダー解析管理、アセット変換などのエンジン／アートツールを開発。"
    },
    "i.proj1.b3": {
      zh: "参与跨引擎移植「开天计划」，将游戏从 BigWorld 引擎移植到 Messiah 引擎；自研两套美术资源跨引擎移植方案并申请获得专利：<strong>BigWorld To Messiah 粒子特效转换工具</strong>、<strong>BigWorld To Messiah 场景资源转移方案</strong>。",
      en: "Contributed to the cross-engine porting project \"Project Kaitian\", moving the game from BigWorld to Messiah, and designed two patented porting solutions: the <strong>BigWorld-to-Messiah particle effect converter</strong> and the <strong>BigWorld-to-Messiah scene asset transfer solution</strong>.",
      ja: "クロスエンジン移植「開天計画」に参加し、ゲームをBigWorldからMessiahへ移植。特許を取得した2つのソリューション、<strong>BigWorld→Messiahパーティクル変換ツール</strong>と<strong>BigWorld→Messiahシーンアセット移行ソリューション</strong>を設計。"
    },
    "i.proj2.title": {
      zh: "《代号：龙击社》",
      en: "Project Dragon Strike",
      ja: "『コードネーム：龍撃社』"
    },
    "i.proj2.b1": {
      zh: "使用 Unity 引擎的未公开研发中 PBR 项目，当时处于 DEMO 阶段，后因公司业务调整，项目组解散。",
      en: "An unreleased PBR project in Unity that was still at the demo stage when the team was disbanded due to business restructuring.",
      ja: "Unityの未公開PBRプロジェクト。DEMO段階で、会社の事業再編によりチームが解散。"
    },
    "i.proj2.b2": {
      zh: "相当于《不休的乌拉拉》的升级版，采用 PBR 流程、URP 管线。",
      en: "Positioned as an upgraded Ulala: Idle Adventure, using a PBR workflow and the URP pipeline.",
      ja: "『ウララ』のアップグレード版という位置づけで、PBRワークフローとURPパイプラインを採用。"
    },
    "i.proj3.title": {
      zh: "《不休的乌拉拉》",
      en: "Ulala: Idle Adventure",
      ja: "『ウララ：アイドルアドベンチャー』"
    },
    "i.proj3.b1": {
      zh: "使用 Unity 引擎，在项目初期即加入，完整地经历了从 DEMO 到内测直至海内外上线的全过程。",
      en: "Joined early in Unity development and carried the project from demo through beta to global launch.",
      ja: "Unityでの開発初期から参加し、デモからベータ、国内外リリースまで一貫して担当。"
    },
    "i.proj3.b2": {
      zh: "当时是项目组唯一技术美术，从零负责所有技术美术工作，包括 Shader 编写（卡通渲染为主）、美术规范制定、美术工具开发、性能优化等，独立处理整个团队的事务。",
      en: "As the team's only technical artist, owned all technical art from scratch, including shader development (mainly stylized), art standards, tooling, and performance optimization.",
      ja: "チーム唯一のテクニカルアーティストとして、シェーダー開発（主にトゥーンレンダリング）、制作規約、ツール開発、性能最適化など、すべてのテクニカルアート業務を一人で担当。"
    },
    "i.proj3.b3": {
      zh: "最终做到项目上线运营，并持续维护半年。",
      en: "Shipped the game to live operations and maintained it for six months.",
      ja: "最終的にサービスを開始し、半年間にわたり継続運用・保守を担当。"
    },
    "i.tech.title": { zh: "工作内容精选", en: "Selected Work", ja: "仕事のハイライト" },
    "i.tech1.title": { zh: "材质效果开发", en: "Material & Effect Development", ja: "マテリアル／エフェクト開発" },
    "i.tech1.b1": {
      zh: "海水与海浪、洗练武器 PBR 材质、风格化卡通渲染 NPR、流光翅膀、光线墙与黑洞、多 Pass 毛绒、流火、视差地裂、天空球系列、风吹草动、RayMarching 云海、动态水波、海底生态、雾效与四季变化等 20+ 项材质与特效。",
      en: "20+ materials and effects, including seawater and waves, weapon PBR materials, stylized NPR rendering, flowing-light wings, light walls and black holes, multi-pass fur, flowing fire, parallax ground cracks, sky spheres, wind-driven grass and trees, raymarched cloud seas, dynamic water ripples, seabed ecosystems, fog, and seasonal change.",
      ja: "海水と波、武器PBRマテリアル、トゥーンレンダリング（NPR）、流光の翼、ライトウォールとブラックホール、マルチパスのファー、流れる炎、パララックスの地面割れ、スカイスフィア、風に揺れる草と木、レイマーチングの雲海、動的な水波、海底生態系、霧と四季変化など20以上のマテリアル／エフェクト。"
    },
    "i.tech1.b2": {
      zh: "曾担任《不休的乌拉拉》项目组唯一技术美术，从零编写所有角色与场景 Shader。",
      en: "As the only technical artist on Ulala: Idle Adventure, wrote all character and environment shaders from scratch.",
      ja: "『ウララ』のチーム唯一のテクニカルアーティストとして、すべてのキャラクター／環境シェーダーをゼロから開発。"
    },
    "i.tech2.label": { zh: "管线 / 工具", en: "Pipeline / Tools", ja: "パイプライン / ツール" },
    "i.tech2.title": {
      zh: "BigWorld → Messiah 跨引擎转换方案",
      en: "BigWorld → Messiah Cross-Engine Conversion",
      ja: "BigWorld → Messiah クロスエンジン変換ソリューション"
    },
    "i.tech2.b1": {
      zh: "场景转换：地形 Shader 移植、模型合并与材质去重、贴图合并与 UV 整理、IndexMap 与 SplatMap 混合方案。",
      en: "Scene conversion: terrain shader porting, model merging with material deduplication, texture packing with UV remapping, and a hybrid IndexMap/SplatMap approach.",
      ja: "シーン変換：地形シェーダーの移植、モデル結合とマテリアルの重複排除、テクスチャ統合とUV整理、IndexMapとSplatMapのハイブリッド方式。"
    },
    "i.tech2.b2": {
      zh: "粒子特效一键转换，可替代 80%–90% 人工环节，简单特效可达 100% 转换。",
      en: "One-click particle conversion replaces 80–90% of manual work, reaching 100% for simple effects.",
      ja: "パーティクルのワンクリック変換により手作業の80〜90%を削減。シンプルなエフェクトでは100%変換が可能。"
    },
    "i.tech3.label": { zh: "工具开发", en: "Tool Development", ja: "ツール開発" },
    "i.tech3.title": { zh: "美术工具开发", en: "Art Tool Development", ja: "アートツール開発" },
    "i.tech3.b1": {
      zh: "Messiah 贴图 AI 重绘优化工具，支持贴图 AI 重绘与一键摆放套装。",
      en: "A Messiah AI texture redraw tool with AI redraw and one-click outfit placement.",
      ja: "MessiahのAIテクスチャ再描画ツール。AI再描画とワンクリックでの衣装配置に対応。"
    },
    "i.tech3.b2": {
      zh: "Shader 分析管理工具：头文件引用分析、寄存器冲突分析与批量检测、Shader 批量编译。",
      en: "A shader analysis tool with header reference analysis, register conflict detection and batch checking, and batch compilation.",
      ja: "シェーダー解析管理ツール。ヘッダー参照解析、レジスタ競合の解析と一括検出、一括コンパイルに対応。"
    },
    "i.cred.title": { zh: "证书 · 专利 · 奖项", en: "Certificates · Patents · Awards", ja: "資格 · 特許 · 受賞" },
    "i.cred1.title": { zh: "语言证书", en: "Languages", ja: "語学資格" },
    "i.cred1.desc": { zh: "TOEFL 91 · CET-6 513 · CET-4 482 · JTest E 级（同 N4）", en: "TOEFL 91 · CET-6 513 · CET-4 482 · JTest E (JLPT N4 equivalent)", ja: "TOEFL 91 · CET-6 513 · CET-4 482 · JTest E級（N4相当）" },
    "i.cred2.title": { zh: "知识产权", en: "Intellectual Property", ja: "知的財産" },
    "i.cred2.desc": { zh: "软件著作权 ×2 · 专利 ×2", en: "Software copyrights ×2 · Patents ×2", ja: "ソフトウェア著作権 ×2 · 特許 ×2" },
    "i.cred3.title": { zh: "网易游戏奖项", en: "NetEase Games Awards", ja: "ネットイースゲームズ 受賞" },
    "i.cred3.desc": {
      zh: "技术创新部门奖 ×1<span class=\"badge\">荣誉</span> · 技术匠心奖 ×3",
      en: "Technology Innovation Award ×1<span class=\"badge\">Honor</span> · Craftsmanship Award ×3",
      ja: "技術革新賞 ×1<span class=\"badge\">栄誉</span> · 技術匠心賞 ×3"
    },
    "i.cred4.title": { zh: "其他", en: "Other", ja: "その他" },
    "i.cred4.desc": {
      zh: "参与翻译《Real-Time Rendering》(4th Edition)",
      en: "Contributed to the translation of Real-Time Rendering (4th Edition)",
      ja: "『Real-Time Rendering』（第4版）の翻訳に参加"
    },
    "i.works.title": { zh: "个人作品", en: "Personal Works", ja: "個人作品" },
    "i.w1.title": { zh: "《原胞：进化》 · 生存 Roguelike", en: "Cell: Evolution · Survival Roguelike", ja: "『原胞：進化』 · サバイバルローグライク" },
    "i.w1.desc": { zh: "吞噬进化，基因三选一，穿越五大海域的生存 Roguelike。", en: "A survival roguelike of consumption and evolution: pick one of three genes per level and cross five seas.", ja: "捕食と進化のサバイバルローグライク。レベルごとに遺伝子を3択で強化し、5つの海域を渡る。" },
    "i.w2.title": { zh: "《幻境 Xanadu》 · 双人横版闯关", en: "Xanadu · Co-op Side-Scroller", ja: "『幻境 Xanadu』 · 2人横スクロールアクション" },
    "i.w2.desc": { zh: "支持手柄的双人合作闯关，获中国大学生计算机设计大赛国赛一等奖。", en: "A controller-supported co-op platformer that won first prize in the China College Student Computer Design Contest.", ja: "コントローラー対応の2人協力アクション。中国大学生コンピューターデザインコンテスト全国一等賞を受賞。" },
    "i.w3.title": { zh: "《Bit Riot》 · 音乐跑酷", en: "Bit Riot · Rhythm Runner", ja: "『Bit Riot』 · リズムランナー" },
    "i.w3.desc": { zh: "像素风格，读取音乐节奏文件自动生成障碍与跑酷路线。", en: "A pixel-art runner that reads rhythm files to generate obstacles and routes.", ja: "ピクセルアート調。音楽のリズムデータを読み取り、障害物とコースを自動生成するランナー。" },
    "i.w4.title": { zh: "《Emma Adventure》 · 动作冒险", en: "Emma Adventure · Action Adventure", ja: "『Emma Adventure』 · アクションアドベンチャー" },
    "i.w4.desc": { zh: "3D 地牢探索，随机房间生成，Shader 特效与角色战斗表现。", en: "3D dungeon exploration with procedural rooms, shader effects, and character combat.", ja: "3Dダンジョン探索。ランダム生成の部屋、シェーダーエフェクト、キャラクターの戦闘表現。" },
    "i.w5.title": { zh: "《One Way》 · 移动端解谜", en: "One Way · Mobile Puzzle", ja: "『One Way』 · モバイルパズル" },
    "i.w5.desc": { zh: "3D LowPoly 风格，点击与松开控制角色移动，共 6 个关卡。", en: "A 3D low-poly puzzle where tap-and-release controls movement across 6 levels.", ja: "3Dローポリ調。タップ／リリースでキャラクターを操作する全6ステージのパズル。" },
    "i.w6.title": { zh: "《寻路 PathFinding》 · 益智解谜", en: "PathFinding · Puzzle", ja: "『PathFinding』 · パズル" },
    "i.w6.desc": { zh: "关卡地图随机生成，方块旋转与镜头控制，寻找通关路径。", en: "Procedurally generated levels with cube rotation and camera control to find the exit.", ja: "ランダム生成のステージでキューブを回転させ、カメラを操作しながら出口を探す。" },
    "i.w7.title": { zh: "《The Garden》 · 网页像素解谜", en: "The Garden · Web Pixel Puzzle", ja: "『The Garden』 · Webピクセルパズル" },
    "i.w7.desc": { zh: "基于 P5.js 的像素风解谜，关注剧情、提示与彩蛋设计。", en: "A pixel-art puzzle in P5.js focused on narrative, hints, and easter eggs.", ja: "P5.js製のピクセルアートパズル。物語、ヒント、イースターエッグに重点を置いた作品。" },
    "i.extra.title": { zh: "附加信息", en: "Additional Info", ja: "その他" },
    "i.extra1.title": { zh: "游戏偏好", en: "Games", ja: "ゲーム" },
    "i.extra1.desc": { zh: "偏爱主机与掌机游戏，拥有 3DS、Switch、PS5 等设备，长期关注动作、解谜与音乐类作品。", en: "Prefers console and handheld games, owns a 3DS, Switch, and PS5, and follows action, puzzle, and music games closely.", ja: "コンソールと携帯機を好み、3DS、Switch、PS5を所有。アクション、パズル、音楽ゲームを長く追いかけている。" },
    "i.extra2.title": { zh: "兴趣", en: "Interests", ja: "趣味" },
    "i.extra2.desc": { zh: "资深二次元用户，喜欢动画与漫画；英语能力较强，能熟练阅读英文技术文章，并参与技术文章翻译。", en: "An avid anime and manga fan with strong English reading skills, translating technical articles as a side interest.", ja: "アニメ・漫画を愛好するオタク。英語に強く、技術記事の翻訳にも参加している。" },

    // Works detail pages (shared)
    "w.demo": { zh: "演示视频", en: "Demo Video", ja: "デモ動画" },
    "w.division": { zh: "项目分工", en: "Roles", ja: "分担" },
    "w.about": { zh: "游戏简介", en: "About the Game", ja: "ゲーム概要" },
    "w.xa.title": { zh: "双人横版闯关游戏 《幻境 Xanadu》", en: "Xanadu · Co-op Side-Scroller", ja: "2人横スクロールアクション『幻境 Xanadu』" },
    "w.xa.meta": { zh: "横版 · 双人 · 2018.03", en: "Side-scroller · Co-op · 2018.03", ja: "横スクロール · 2人 · 2018.03" },
    "w.xa.intro": { zh: "这是一个双人横版闯关游戏（支持手柄），获得中国大学生计算机设计大赛国赛一等奖。", en: "A controller-supported co-op side-scroller that won first prize in the China College Student Computer Design Contest.", ja: "コントローラー対応の2人横スクロールアクション。中国大学生コンピューターデザインコンテスト全国一等賞を受賞。" },
    "w.xa.division": { zh: "三人开发，我担任程序，参与策划及特效制作。", en: "Three developers; I was the programmer and contributed to design and effects.", ja: "3人で開発。プログラマーを担当し、企画とエフェクト制作にも参加。" },
    "w.xa.about1": { zh: "两个玩家能操纵各自的角色合作闯关，游戏中致敬了马里奥的方块，玩家能通过顶方块来获得不同的道具。", en: "Two players control their own characters through co-op levels. The game pays homage to Mario's blocks, which players bump to gain items.", ja: "2人のプレイヤーがそれぞれのキャラクターを操作して協力し、ステージを攻略。マリオのブロックをオマージュし、ブロックを叩いてアイテムを獲得する。" },
    "w.xa.about2": { zh: "进一步熟悉了横版平台跳跃游戏的开发，第一次开发手柄游玩的双人游戏，进一步熟悉了 Unity 的 Animator 等系统，开始关注优秀横版游戏镜头的拉伸与跟踪的细节并着手实现。", en: "Deepened side-scroller platformer development, shipped a first controller co-op game, and explored Unity's Animator while studying camera framing and tracking in great platformers.", ja: "横スクロールプラットフォーマーの開発経験を深め、コントローラー対応の2人ゲームを初めて開発。UnityのAnimatorなどを学び、優れた横スクロールゲームのカメラの寄りと追従のディテールを研究・実装した。" },
    "w.bi.title": { zh: "音乐跑酷游戏 《Bit Riot》", en: "Bit Riot · Rhythm Runner", ja: "リズムランナー『Bit Riot』" },
    "w.bi.meta": { zh: "音乐 · 跑酷 · 2018.03", en: "Music · Runner · 2018.03", ja: "音楽 · ランナー · 2018.03" },
    "w.bi.intro": { zh: "第一次制作音乐类游戏，对像素风格产生了兴趣并进行了一定的学习。自己编写了小插件给美术的同学使用，能从外部读取音乐节奏文件并自动在地图上生成障碍物，并可拖拽生成跑酷路线。", en: "A first music game that sparked an interest in pixel art. I wrote a small plugin for artists that reads rhythm files and auto-generates obstacles on the map, plus a drag-and-drop runner route editor.", ja: "初めての音楽ゲームで、ピクセルアートに興味を持ち学習。アーティスト向けのプラグインを自作し、音楽のリズムデータを読み込んでマップ上に障害物を自動生成、コースをドラッグ＆ドロップで作成できるようにした。" },
    "w.bi.division": { zh: "三人开发，我担任程序、部分涉及 Shader 的特效制作。", en: "Three developers; I was the programmer and handled some shader-based effects.", ja: "3人で開発。プログラマーを担当し、シェーダーを使ったエフェクトも一部担当。" },
    "w.bi.about1": { zh: "玩家操纵主角在道路上奔跑，中途根据音乐节奏有不同的障碍物阻挡玩家前进，玩家需要根据画面提示，按下相应的按键躲避障碍物。根据按键的准确程度，将给予不同的分数，一首曲子结束后，系统会根据相应的得分给出评价，若得分足够高，则计入排行榜。", en: "Players run along a track where obstacles follow the music. Follow on-screen cues to dodge them; timing accuracy is scored, and high scores make the leaderboard after each track.", ja: "プレイヤーは音楽のリズムに合わせて現れる障害物を、画面の指示に従ってボタンを押して回避しながら走る。タイミングの正確さに応じてスコアが付き、曲の終了時に評価され、高得点はランキングに載る。" },
    "w.em.title": { zh: "动作冒险游戏 《Emma Adventure》", en: "Emma Adventure · Action Adventure", ja: "アクションアドベンチャー『Emma Adventure』" },
    "w.em.meta": { zh: "动作 · 探索 · 2018.03", en: "Action · Exploration · 2018.03", ja: "アクション · 探索 · 2018.03" },
    "w.em.intro": { zh: "这是一个 3D 地牢探索游戏，并带有爽快的战斗。在开发过程中，自己写了一套随机房间生成算法，进一步熟悉了 3D 动作游戏的开发。进一步学习了 Shader，并实现了扭曲、溶解、镜面、人物发光等 Shader 特效。", en: "A 3D dungeon crawler with satisfying combat. I wrote a procedural room generator, deepened 3D action development, and implemented shader effects including distortion, dissolve, mirrors, and character glow.", ja: "爽快な戦闘を備えた3Dダンジョン探索ゲーム。ランダムな部屋生成アルゴリズムを自作し、3Dアクションの開発経験を深めた。シェーダーを学び、歪み、溶解、鏡面、キャラクターの発光などのエフェクトを実装。" },
    "w.em.division": { zh: "两人开发，我担任策划、程序、部分涉及 Shader 的特效制作。", en: "Two developers; I was the designer, programmer, and handled some shader effects.", ja: "2人で開発。企画とプログラマーを担当し、シェーダーを使ったエフェクトも一部担当。" },
    "w.em.about1": { zh: "玩家操纵主角 Emma 探索地牢，探索不同的房间，找出最终 BOSS 并击败，从而获得胜利。地图房间顺序随机生成，宝箱和怪物随机摆放，每次进入游戏都会稍有不同；途中会遇到需要解谜和恢复生命的房间，最终走到 BOSS 房并将其击败即可通关。", en: "Guide Emma through the dungeon, exploring rooms to find and defeat the final boss. Room order, chests, and monsters are randomized each run; puzzle and recovery rooms appear along the way.", ja: "主人公Emmaを操作してダンジョンを探索し、最終BOSSを倒して勝利を目指す。部屋の順序、宝箱、モンスターは毎回ランダム。道中にはパズルや回復の部屋があり、BOSS部屋で撃破すればクリアとなる。" },
    "w.em.about2": { zh: "玩家拥有多种技能，包括普通攻击（三连击）、愤怒状态（按 Q 开启，消耗能量），以及会伤到自己的炸弹攻击。", en: "The player has a normal three-hit combo, a rage mode (press Q, consumes energy), and a bomb attack that can hurt the player too.", ja: "通常攻撃（3連撃）、レイジ状態（Qキーで発動、エネルギー消費）、自分にもダメージを与える爆弾攻撃など、複数のスキルを持つ。" },
    "w.ow.title": { zh: "移动端解谜游戏 《One Way》", en: "One Way · Mobile Puzzle", ja: "モバイルパズル『One Way』" },
    "w.ow.meta": { zh: "解谜 · LowPoly · 2018.03", en: "Puzzle · LowPoly · 2018.03", ja: "パズル · ローポリ · 2018.03" },
    "w.ow.intro": { zh: "这是一个移动端的 3D LowPoly 风格解谜游戏。", en: "A mobile 3D low-poly puzzle game.", ja: "モバイル向けの3Dローポリパズルゲーム。" },
    "w.ow.division": { zh: "两人开发，我担任程序。", en: "Two developers; I was the programmer.", ja: "2人で開発。プログラマーを担当。" },
    "w.ow.about1": { zh: "游戏方法很简单：点击屏幕时，小人会停下；松开屏幕时，小人会继续走。利用这个简单的机制做了 6 个关卡，并熟悉了 Unity 移动端游戏的开发。", en: "The rule is simple: hold to stop, release to walk. Built around this mechanic are 6 levels that deepened Unity mobile development.", ja: "ルールはシンプル。画面をタップすると止まり、離すと歩き続ける。この仕組みで6ステージを制作し、Unityモバイル開発に習熟した。" },
    "w.pf.title": { zh: "益智解谜游戏 《寻路 PathFinding》", en: "PathFinding · Puzzle", ja: "パズルゲーム『PathFinding』" },
    "w.pf.meta": { zh: "益智 · 解谜 · 2018.05", en: "Puzzle · 2018.05", ja: "パズル · 2018.05" },
    "w.pf.intro": { zh: "益智解谜类小游戏，关卡地图随机生成。画面风格略微模仿了纪念碑谷，为极简风。", en: "A puzzle game with procedurally generated maps, in a minimalist style inspired by Monument Valley.", ja: "ランダム生成のマップで遊ぶパズルゲーム。『モニュメントバレー』を参考にしたミニマルな表現。" },
    "w.pf.division": { zh: "二人开发，我担任程序、部分涉及 Shader 的美术。", en: "Two developers; I was the programmer and handled some shader art.", ja: "2人で開発。プログラマーと一部のシェーダーアートを担当。" },
    "w.pf.about1": { zh: "游戏关卡由算法随机生成，从容易逐步变得困难。玩家操纵小球在方块间来回穿行，仅允许直线穿行，鼠标可控制镜头观察场景，键盘 WSAD 控制方块旋转，找到通向终点的路即可通关；在规定时间内通关最多且步数最少者可以得到更高的分数（拥有排行榜功能）。", en: "Levels are procedurally generated and ramp in difficulty. Move the ball in straight lines between blocks, rotate blocks with WASD, and reach the exit; the leaderboard rewards most completions in the fewest steps.", ja: "ステージはアルゴリズムでランダム生成され、徐々に難しくなる。ボールを直線移動で進め、マウスでカメラ、WSADでブロックを回転させてゴールを目指す。制限時間内に最小手数でクリアすると高スコア（ランキング機能あり）。" },
    "w.tg.title": { zh: "Web 像素解谜游戏 《The Garden》", en: "The Garden · Web Pixel Puzzle", ja: "Webピクセルパズル『The Garden』" },
    "w.tg.meta": { zh: "解谜 · 像素 · 2018.03", en: "Puzzle · Pixel · 2018.03", ja: "パズル · ピクセル · 2018.03" },
    "w.tg.intro": { zh: "这是一个网页像素风格解谜游戏，基于 P5.js 框架开发。", en: "A web-based pixel-art puzzle built with P5.js.", ja: "P5.jsで開発したWebピクセルアートパズルゲーム。" },
    "w.tg.division": { zh: "单人开发。", en: "Solo project.", ja: "個人開発。" },
    "w.tg.about1": { zh: "在 UCLA 的游戏设计课程作业，基于 P5.js 框架开发，自己绘制了像素风格的素材，并注意到了游戏中剧情、提示、彩蛋的重要性。", en: "A UCLA game design course project built in P5.js with hand-drawn pixel art, exploring narrative, hints, and easter eggs.", ja: "UCLAのゲームデザイン授業の課題としてP5.jsで開発。ピクセル素材を自作し、ゲームにおける物語・ヒント・イースターエッグの重要性に注目した。" },
    "w.tg.play": { zh: "游玩地址：", en: "Play:", ja: "プレイ：" },
    "w.yb.title": { zh: "生存 Roguelike 《原胞：进化》", en: "Cell: Evolution · Survival Roguelike", ja: "サバイバルローグライク『原胞：進化』" },
    "w.yb.meta": { zh: "街机 · TapTap制造 · 2026", en: "Arcade · TapTap Maker · 2026", ja: "アーケード · TapTap Maker · 2026" },
    "w.yb.intro": { zh: "《原胞：进化》是一款灵感来源于 Agar.io 与吸血鬼幸存者的生存 Roguelike。你扮演原始海洋里的一个细胞，通过吞噬不断进化。", en: "Cell: Evolution is a survival roguelike inspired by Agar.io and Vampire Survivors. Play as a cell in the primordial sea and evolve by consuming.", ja: "『原胞：進化』はAgar.ioとVampire Survivorsに着想を得たサバイバルローグライク。原始の海の細胞として、捕食を繰り返して進化していく。" },
    "w.yb.about1": { zh: "吃下营养与其他细胞获取经验，每升一级从基因中三选一强化自己，穿越五个海域，最终击败终焉之海的领主。", en: "Gain experience by consuming nutrients and other cells, pick one of three genes per level, cross five seas, and defeat the lord of the Final Sea.", ja: "栄養や他の細胞を捕食して経験値を獲得し、レベルアップごとに遺伝子を3択で強化。5つの海域を渡り、終焉の海の主を倒すのが目標。" },
    "w.yb.dev": { zh: "开发者的话", en: "From the Developer", ja: "開発者より" },
    "w.yb.dev1": { zh: "第一次使用 TapTap Maker 单枪匹马制作并发布游戏，今后会不断更新各类功能和关卡！希望大家玩得愉快！", en: "This is my first solo game made and published with TapTap Maker. I'll keep adding features and levels—enjoy!", ja: "TapTap Makerで初めて一人で制作・公開したゲームです。今後も機能やステージをどんどん更新していきます！楽しんでください！" },
    "w.yb.shots": { zh: "游戏截图", en: "Screenshots", ja: "スクリーンショット" },
    "w.yb.play": { zh: "试玩地址", en: "Play", ja: "プレイ" },
    "w.yb.link": { zh: "TapTap · 原胞：进化", en: "TapTap · Cell: Evolution", ja: "TapTap · 原胞：進化" },

    // Project detail pages
    "p.tx.title": { zh: "《天下3》《天下移动版》《天下贰》《天下：万象》", en: "Tianxia 3 / Tianxia Mobile / Tianxia 2 / Tianxia: The World", ja: "『天下3』『天下モバイル』『天下2』『天下：万象』" },
    "p.tx.meta": { zh: "MMORPG · 山海经国风 · BigWorld / Messiah · 2020.9 – 2026.9", en: "MMORPG · Chinese fantasy · BigWorld / Messiah · 2020.9 – 2026.9", ja: "MMORPG · 山海経ファンタジー · BigWorld / Messiah · 2020.9 – 2026.9" },
    "p.tx.intro": { zh: "《天下》系列是网易游戏旗舰级 3D MMORPG，以《山海经》为背景，构建宏大的玄幻国风「大荒」世界，历经《天下贰》《天下3》《天下移动版》《天下：万象》等多代产品，覆盖 PC 端与移动端。", en: "The Tianxia series is NetEase Games' flagship 3D MMORPG based on Classic of Mountains and Seas, building the vast fantasy world of Dahuang across PC and mobile through Tianxia 2, Tianxia 3, Tianxia Mobile, and Tianxia: The World.", ja: "『天下』シリーズはネットイースゲームズの主力3D MMORPG。『山海経』を題材に壮大なファンタジー世界「大荒」を構築し、『天下2』『天下3』『天下モバイル』『天下：万象』とPC・モバイルに展開。" },
    "p.tx.bg": { zh: "项目背景", en: "Background", ja: "プロジェクト背景" },
    "p.tx.bg1": { zh: "网易游戏旗舰玄幻国风网游，山海经题材的 3D 大型多人在线游戏；系列产品迭代多年，是网易自研引擎与美术管线的重要承载项目。", en: "NetEase Games' flagship Chinese-fantasy MMO—a 3D massively multiplayer game rooted in Classic of Mountains and Seas that has anchored the company's in-house engine and art pipeline for years.", ja: "ネットイースゲームズの主力中華ファンタジーMMO。山海経を題材とした3D大規模多人数オンラインゲームで、長年にわたり自社エンジンとアートパイプラインを支えるプロジェクト。" },
    "p.tx.role": { zh: "我的职责", en: "My Role", ja: "担当" },
    "p.tx.role1": { zh: "使用网易自研 BigWorld、Messiah 引擎，负责材质效果开发，包括场景氛围、时装、坐骑、后处理、天气与地形方案等。", en: "Developed material effects on the in-house BigWorld and Messiah engines, covering scene atmosphere, costumes, mounts, post-processing, weather, and terrain.", ja: "自社製のBigWorld・Messiahエンジンでマテリアル表現を開発。シーン演出、衣装、マウント、ポストプロセス、天候、地形などを担当。" },
    "p.tx.role2": { zh: "开发引擎工具与美术工具，包括 AI 自动化贴图重绘工具、Shader 分析管理工具、资源转换工具等。", en: "Built engine and art tools, including AI texture redraw automation, shader analysis management, and asset conversion.", ja: "AI自動テクスチャ再描画、シェーダー解析管理、アセット変換などのエンジン／アートツールを開発。" },
    "p.tx.ach": { zh: "技术成果", en: "Achievements", ja: "成果" },
    "p.tx.ach1": { zh: "参与「开天计划」跨引擎移植，将游戏从 BigWorld 引擎移植到 Messiah 引擎；自研两套美术资源跨引擎移植方案并申请获得专利：BigWorld To Messiah 粒子特效转换工具、BigWorld To Messiah 场景资源转移方案。", en: "Joined \"Project Kaitian\" to port the game from BigWorld to Messiah, and designed two patented cross-engine porting solutions: the BigWorld-to-Messiah particle converter and the BigWorld-to-Messiah scene transfer solution.", ja: "クロスエンジン移植「開天計画」に参加し、BigWorldからMessiahへ移植。特許を取得した2つのソリューション（BigWorld→Messiahパーティクル変換ツール、BigWorld→Messiahシーン移行ソリューション）を設計。" },
    "p.lj.title": { zh: "PBR 研发项目 《代号：龙击社》", en: "PBR R&D Project: Dragon Strike", ja: "PBR開発プロジェクト『コードネーム：龍撃社』" },
    "p.lj.meta": { zh: "Unity URP · PBR · 2020.1 – 2020.8", en: "Unity URP · PBR · 2020.1 – 2020.8", ja: "Unity URP · PBR · 2020.1 – 2020.8" },
    "p.lj.intro": { zh: "《代号：龙击社》是一款未公开的研发中 PBR 项目，使用 Unity URP 管线，定位相当于《不休的乌拉拉》的升级版；因公司业务调整，项目组在 DEMO 阶段解散。", en: "Dragon Strike was an unreleased PBR R&D project using Unity URP, positioned as an upgraded Ulala: Idle Adventure; the team disbanded at the demo stage due to business restructuring.", ja: "『コードネーム：龍撃社』はUnity URPを使った未公開のPBR開発プロジェクト。『ウララ』のアップグレード版という位置づけだったが、会社の事業再編によりDEMO段階で解散。" },
    "p.lj.bg": { zh: "项目背景", en: "Background", ja: "プロジェクト背景" },
    "p.lj.bg1": { zh: "作为《不休的乌拉拉》的升级方向，项目采用 PBR 流程与 URP 管线，追求更高质量的材质、光照与整体画面表现，目标是在保留轻松玩法基调的同时全面提升视觉品质。", en: "As an upgraded Ulala, the project adopted a PBR workflow and URP pipeline to push material, lighting, and overall visual quality while keeping a casual gameplay tone.", ja: "『ウララ』のアップグレード版として、PBRワークフローとURPパイプラインを採用し、マテリアル・ライティング・画面表現の品質向上を追求。カジュアルな遊びの基調を保ちつつ、ビジュアルを全面的に強化することを目指した。" },
    "p.lj.role": { zh: "我的职责", en: "My Role", ja: "担当" },
    "p.lj.role1": { zh: "作为技术美术，负责 PBR 流程搭建、材质效果研发与渲染管线相关工作，探索卡通风格与 PBR 结合的表现方案，带来更精致的材质与光照渲染效果。", en: "As technical artist, I set up the PBR workflow, developed materials and rendering pipeline work, and explored blending stylized rendering with PBR for richer materials and lighting.", ja: "テクニカルアーティストとしてPBRワークフローの構築、マテリアル／レンダリングパイプラインの開発を担当。トゥーン表現とPBRの融合を探り、より精緻なマテリアルとライティングを実現した。" },
    "p.lj.now": { zh: "项目现状", en: "Current Status", ja: "現在の状況" },
    "p.lj.now1": { zh: "项目停留在 DEMO 阶段，因公司业务调整项目组解散；相关技术积累沉淀到后续项目中。", en: "The project stayed at the demo stage and the team disbanded due to restructuring; the technical experience carried into later projects.", ja: "プロジェクトはDEMO段階のまま、事業再編によりチームが解散。技術的な蓄積は後続プロジェクトに受け継がれた。" },
    "p.wl.title": { zh: "放置手游 《不休的乌拉拉》", en: "Idle Mobile Game: Ulala: Idle Adventure", ja: "放置モバイルゲーム『ウララ：アイドルアドベンチャー』" },
    "p.wl.meta": { zh: "放置 · 组队 · Unity · 2018.6 – 2020.6", en: "Idle · Co-op · Unity · 2018.6 – 2020.6", ja: "放置 · 協力 · Unity · 2018.6 – 2020.6" },
    "p.wl.intro": { zh: "《不休的乌拉拉》是一款由厦门真有趣研发、心动网络发行的放置类手机游戏，2019 年 10 月 21 日正式上线。游戏中「乌拉拉」是寻找同伴的暗号，玩家与同伴协同组队、共同战斗，在放置养成的轻松节奏中不断成长。", en: "Ulala: Idle Adventure is an idle mobile game developed by Xiamen Zhenyouqu and published by XD, launched on October 21, 2019. \"Ulala\" is the signal to gather companions, and players team up to fight and grow at a relaxed pace.", ja: "『ウララ：アイドルアドベンチャー』は厦門真有趣が開発し、XDが配信する放置系モバイルゲームで、2019年10月21日に正式リリース。「ウララ」は仲間を集める合図で、プレイヤーは協力して戦い、のんびりと育成していく。" },
    "p.wl.bg": { zh: "项目背景", en: "Background", ja: "プロジェクト背景" },
    "p.wl.bg1": { zh: "心动网络继《天天打波利》之后推出的第二款放置手游，主打轻松休闲与组队社交，覆盖国内与海外市场，并支持云游戏等多种游玩形态。", en: "XD's second idle game after Ragnarok Clicker, focused on casual play and co-op social features across domestic and overseas markets, with cloud gaming support.", ja: "XDが『ラグナロク・クリッカー』に続いてリリースした2作目の放置ゲーム。カジュアルさと協力ソーシャルを重視し、国内・海外市場とクラウドゲームに対応。" },
    "p.wl.role": { zh: "我的职责", en: "My Role", ja: "担当" },
    "p.wl.role1": { zh: "在项目初期即加入，完整地经历了从 DEMO 到内测直至海内外上线的全过程；作为项目组唯一技术美术，从零负责全部技术美术工作，包括 Shader 编写（卡通渲染为主）、美术规范制定、美术工具开发、性能优化等。", en: "Joined early and carried the project from demo to beta and global launch. As the team's only technical artist, owned all technical art from scratch—shaders (mainly stylized), art standards, tooling, and performance optimization.", ja: "開発初期から参加し、デモからベータ、国内外リリースまで一貫して担当。チーム唯一のテクニカルアーティストとして、シェーダー（主にトゥーンレンダリング）、制作規約、ツール開発、性能最適化など、すべてをゼロから担当。" },
    "p.wl.points": { zh: "技术要点", en: "Technical Highlights", ja: "技術ポイント" },
    "p.wl.points1": { zh: "Unity 引擎、卡通渲染 Shader、移动端性能优化、美术工具链与规范制定。", en: "Unity engine, stylized shaders, mobile performance optimization, and art toolchain and standards.", ja: "Unityエンジン、トゥーンレンダリングシェーダー、モバイル性能最適化、アートツールチェーンと制作規約。" },

    // Tech detail pages
    "t.ef.title": { zh: "材质效果开发", en: "Material & Effect Development", ja: "マテリアル／エフェクト開発" },
    "t.ef.meta": { zh: "Materials · Shaders · BigWorld / Messiah / Unity · 2018 – 2026", en: "Materials · Shaders · BigWorld / Messiah / Unity · 2018 – 2026", ja: "Materials · Shaders · BigWorld / Messiah / Unity · 2018 – 2026" },
    "t.ef.intro": { zh: "涵盖场景、角色、特效、后处理等多个方向的材质与 Shader 开发，共 20 余项效果。", en: "Materials and shader work across environments, characters, effects, and post-processing—20+ effects in total.", ja: "シーン、キャラクター、エフェクト、ポストプロセスなど多岐にわたるマテリアル／シェーダー開発。合計20以上のエフェクト。" },
    "t.ef.water": { zh: "海水与海浪", en: "Seawater & Waves", ja: "海水と波" },
    "t.ef.water1": { zh: "实现深度与颜色变化、海浪、沙滩打湿效果与焦散，营造真实的海岸环境。", en: "Depth and color variation, waves, wet-sand effects, and caustics for a realistic coastline.", ja: "深度と色の変化、波、濡れた砂の表現、コースティクスでリアルな海岸を演出。" },
    "t.ef.water.cap1": { zh: "海浪与沙滩打湿", en: "Waves & wet sand", ja: "波と濡れた砂" },
    "t.ef.water.cap2": { zh: "焦散效果", en: "Caustics", ja: "コースティクス" },
    "t.ef.water.cap3": { zh: "海水与海浪效果演示", en: "Seawater & waves demo", ja: "海水と波のデモ" },
    "t.ef.weapon": { zh: "洗练武器 PBR 材质", en: "Refined Weapon PBR Material", ja: "武器強化PBRマテリアル" },
    "t.ef.weapon1": { zh: "开发综合型 Shader 配合武器洗练功能，在 PBR Shader 基础上加入材质区域蒙版、宝石、流光与呼吸灯，支持荧光海水、泥沼等效果；按洗练等级分为低阶（无特殊效果）、中阶（微弱流光）、高阶（高光与流光进一步加强）。", en: "A comprehensive shader for weapon refinement that adds material masks, gems, flowing light, and breathing lights to a PBR base, supporting fluorescent water and swamp effects, with low/mid/high tiers of visual intensity.", ja: "武器強化向けの総合シェーダーを開発。PBRシェーダーにマテリアルマスク、宝石、流光、ブリージングライトを追加し、蛍光の水や泥沼の表現に対応。強化レベルに応じて低階（無効果）・中階（弱い流光）・高階（ハイライトと流光の強化）に変化。" },
    "t.ef.npr": { zh: "风格化卡通渲染（NPR）", en: "Stylized Rendering (NPR)", ja: "トゥーンレンダリング（NPR）" },
    "t.ef.npr1": { zh: "曾担任《不休的乌拉拉》项目组唯一技术美术，从零编写了所有角色与场景 Shader。", en: "As the only technical artist on Ulala: Idle Adventure, wrote all character and environment shaders from scratch.", ja: "『ウララ』のチーム唯一のテクニカルアーティストとして、すべてのキャラクター／環境シェーダーをゼロから開発。" },
    "t.ef.sky": { zh: "天空与光效", en: "Sky & Light Effects", ja: "空とライトエフェクト" },
    "t.ef.sky1": { zh: "天空裂隙使用一张 FlowMap 结合 Shader 实现天空球云层流动；流光翅膀包含黄金蝴蝶、七彩蝴蝶等带流光与闪点的高级翅膀；另实现玩家靠近时的光线墙，以及天空扭曲的黑洞效果。", en: "A sky rift uses a FlowMap with a shader to drive cloud motion on the sky sphere; flowing-light wings include golden and rainbow butterflies; also built proximity light walls and a sky-warping black hole.", ja: "空の裂け目はFlowMapとシェーダーでスカイスフィアの雲の流れを表現。流光の翼は黄金の蝶や七色の蝶など高級な翼を収録。プレイヤーが近づくと現れるライトウォールと、空を歪ませるブラックホールも実装。" },
    "t.ef.sky.cap1": { zh: "天空裂隙（FlowMap 云层流动）", en: "Sky rift (FlowMap cloud flow)", ja: "空の裂け目（FlowMapによる雲の流れ）" },
    "t.ef.sky.cap2": { zh: "黄金蝴蝶", en: "Golden butterfly", ja: "黄金の蝶" },
    "t.ef.sky.cap3": { zh: "七彩蝴蝶", en: "Rainbow butterfly", ja: "七色の蝶" },
    "t.ef.sky.cap4": { zh: "光线墙（玩家靠近）", en: "Light wall (player proximity)", ja: "ライトウォール（プレイヤー接近時）" },
    "t.ef.sky.cap5": { zh: "黑洞扭曲", en: "Black hole distortion", ja: "ブラックホールの歪み" },
    "t.ef.sky.cap6": { zh: "黑洞吞噬", en: "Black hole swallow", ja: "ブラックホールの飲み込み" },
    "t.ef.char": { zh: "角色与特效", en: "Characters & Effects", ja: "キャラクターとエフェクト" },
    "t.ef.char1": { zh: "多 Pass 毛绒效果、捏脸范围、流火特效，以及采用模型 + 深度剔除的视差地裂效果。", en: "Multi-pass fur, face-shaping regions, flowing fire, and parallax ground cracks using model + depth culling.", ja: "マルチパスのファー、フェイスシェイプ領域、流れる炎、モデル＋深度カリングによるパララックス地面割れ。" },
    "t.ef.fur": { zh: "多 Pass 毛绒效果", en: "Multi-Pass Fur", ja: "マルチパス ファー" },
    "t.ef.fur.cap1": { zh: "多 Pass 毛绒效果", en: "Multi-pass fur", ja: "マルチパス ファー" },
    "t.ef.fur.cap2": { zh: "材质球效果", en: "Material sphere", ja: "マテリアルスフィア" },
    "t.ef.face": { zh: "捏脸范围", en: "Face-Shaping Regions", ja: "フェイスシェイプ領域" },
    "t.ef.face.cap1": { zh: "捏脸范围", en: "Face-shaping regions", ja: "フェイスシェイプ領域" },
    "t.ef.face.cap2": { zh: "编号贴图", en: "Index map", ja: "インデックスマップ" },
    "t.ef.face.cap3": { zh: "区域贴图", en: "Region map", ja: "リージョンマップ" },
    "t.ef.fire": { zh: "流火特效", en: "Flowing Fire", ja: "流れる炎" },
    "t.ef.fire.cap1": { zh: "烈焰", en: "Blaze", ja: "烈火" },
    "t.ef.fire.cap2": { zh: "幽冥", en: "Nether", ja: "幽冥" },
    "t.ef.crack": { zh: "视差地裂", en: "Parallax Ground Cracks", ja: "パララックス地面割れ" },
    "t.ef.crack.cap1": { zh: "地裂 · 模型 + 深度剔除", en: "Crack · model + depth culling", ja: "地面割れ · モデル＋深度カリング" },
    "t.ef.crack.cap2": { zh: "地裂 · 视差", en: "Crack · parallax", ja: "地面割れ · パララックス" },
    "t.ef.sphere": { zh: "天空球系列", en: "Sky Sphere Series", ja: "スカイスフィアシリーズ" },
    "t.ef.sphere1": { zh: "云雾星空、极光、星轨流星、漩涡等天空球效果，以及月亮侵蚀完整变化与火属性 / 水属性裂隙天空。", en: "Cloudy starfields, auroras, star trails and meteors, vortex skies, a full moon-eclipse cycle, and fire/water rift skies.", ja: "雲と星空、オーロラ、星の軌跡と流星、渦などのスカイスフィアに加え、月の侵食のフル変化、火属性／水属性の裂け目のある空を実装。" },
    "t.ef.veg": { zh: "植被与风", en: "Vegetation & Wind", ja: "植生と風" },
    "t.ef.veg1": { zh: "风吹草动：整体风使用噪声图流动对草模型进行顶点偏移，局部风使用特殊 FlowMap。风吹树动：模仿 Horizon Zero Dawn 在 GDC 分享的方法输出顶点色辅助树枝各层级叠加；摆动参考 GPU GEMS 3 的噪声公式，区分迎风、背风与垂直三种方向。", en: "Grass: global wind uses flowing noise for vertex offset, local wind uses a special FlowMap. Trees: vertex colors inspired by Horizon Zero Dawn's GDC talk drive branch layering, with GPU GEMS 3 noise formulas for windward, leeward, and vertical directions.", ja: "草：全体の風はノイズマップの流れで頂点オフセット、局所の風は専用FlowMapで表現。木：Horizon Zero DawnのGDC講演を参考に頂点カラーで枝の階層を補助し、GPU GEMS 3のノイズ式で風上・風下・垂直の3方向を区別。" },
    "t.ef.veg.cap1": { zh: "整体风吹草动", en: "Global grass wind", ja: "全体の草の揺れ" },
    "t.ef.veg.cap2": { zh: "局部风效果", en: "Local wind effect", ja: "局所の風" },
    "t.ef.veg.cap3": { zh: "迎风摆动", en: "Windward sway", ja: "風上の揺れ" },
    "t.ef.veg.cap4": { zh: "背风摆动", en: "Leeward sway", ja: "風下の揺れ" },
    "t.ef.veg.cap5": { zh: "风向调整", en: "Wind direction", ja: "風向の調整" },
    "t.ef.veg.cap6": { zh: "风力调整", en: "Wind strength", ja: "風力の調整" },
    "t.ef.veg.cap7": { zh: "风吹树动", en: "Tree wind", ja: "木の揺れ" },
    "t.ef.sea": { zh: "云海 · 水面 · 海底 · 地形", en: "Cloud Sea · Water · Seabed · Terrain", ja: "雲海 · 水面 · 海底 · 地形" },
    "t.ef.sea1": { zh: "RayMarching 云海，并使用 dithers 优化防止分层条纹、减少计算；动态水波通过程序生成贴图逐帧迭代；水面漩涡采用顶点偏移并开启曲面细分；此外还有地形消除重复感与海底扭曲焦散后处理。", en: "Raymarched cloud seas optimized with dithering; procedurally generated dynamic water ripples; vertex-offset vortexes with tessellation; terrain de-tiling; and an underwater distortion caustics post-process.", ja: "レイマーチングの雲海をディザで最適化してバンディングを防止。動的な水波はテクスチャをフレームごとに反復生成。渦は頂点オフセット＋テッセレーションで表現。地形の繰り返し除去と、海底の歪みコースティクスのポストプロセスも実装。" },
    "t.ef.sea.cap1": { zh: "RayMarching 云海", en: "Raymarched cloud sea", ja: "レイマーチングの雲海" },
    "t.ef.sea.cap2": { zh: "动态水波", en: "Dynamic water ripples", ja: "動的な水波" },
    "t.ef.sea.cap3": { zh: "漩涡 · 躁动", en: "Vortex · turbulent", ja: "渦 · 荒ぶり" },
    "t.ef.sea.cap4": { zh: "漩涡 · 宁静", en: "Vortex · calm", ja: "渦 · 静けさ" },
    "t.ef.sea.cap5": { zh: "地形消除重复感（处理前）", en: "Terrain de-tiling (before)", ja: "地形の繰り返し除去（処理前）" },
    "t.ef.sea.cap6": { zh: "地形消除重复感（处理后）", en: "Terrain de-tiling (after)", ja: "地形の繰り返し除去（処理後）" },
    "t.ef.sea.cap7": { zh: "海底焦散", en: "Underwater caustics", ja: "海底コースティクス" },
    "t.ef.sea.cap8": { zh: "海底扭曲", en: "Underwater distortion", ja: "海底の歪み" },
    "t.ef.bed": { zh: "海底生态与撒点", en: "Seabed Ecosystem & Scattering", ja: "海底生態系とスキャッタリング" },
    "t.ef.bed1": { zh: "为 BigWorld 引擎开发植物分布图撒点功能（类似 PCG 工具），根据地形高度图与植被分布图撒点并随机化植物簇分布；结合 World Creator 编辑地形，实现海底植被撒点、鱼群 flocking 与投射焦散光效。", en: "Built a PCG-like vegetation scattering tool for BigWorld that scatters plants from height and distribution maps and randomizes clusters; combined with World Creator terrain editing, it powers seabed vegetation, fish flocking, and projected caustics.", ja: "BigWorld向けにPCG風の植生スキャッタリング機能を開発。地形の高さマップと植生分布マップから植物を配置し、クラスターをランダム化。World Creatorでの地形編集と組み合わせ、海底植生、魚の群れ（フロッキング）、投影コースティクスを実現。" },
    "t.ef.atmo": { zh: "场景氛围", en: "Scene Atmosphere", ja: "シーン演出" },
    "t.ef.atmo1": { zh: "程序控制动态天气雾效；使用 Mask 贴图 + Shader 实现春夏秋冬四季变化。", en: "Procedural dynamic weather fog, plus mask-map shaders for four-season transitions.", ja: "プロシージャルな動的天候の霧と、Maskマップ＋シェーダーによる春夏秋冬の四季変化を実装。" },

    "t.cv.title": { zh: "BigWorld → Messiah 跨引擎转换方案", en: "BigWorld → Messiah Cross-Engine Conversion", ja: "BigWorld → Messiah クロスエンジン変換ソリューション" },
    "t.cv.meta": { zh: "Pipeline · Tooling · 2020 – 2026", en: "Pipeline · Tooling · 2020 – 2026", ja: "Pipeline · Tooling · 2020 – 2026" },
    "t.cv.intro": { zh: "为天下系列跨引擎移植「开天计划」自研的两套资源转换方案，均已申请专利。", en: "Two patented asset-conversion solutions built for the Tianxia series' cross-engine porting project \"Project Kaitian\".", ja: "天下シリーズのクロスエンジン移植「開天計画」向けに自社開発した2つのアセット変換ソリューション。いずれも特許を取得。" },
    "t.cv.scene": { zh: "场景转换方案", en: "Scene Conversion", ja: "シーン変換ソリューション" },
    "t.cv.scene.bg": { zh: "<strong>背景：</strong>天下端游项目组决定在端游（BigWorld）和手游（Messiah）同时推出同一个大场景地图，需要将 BigWorld 场景导入 Messiah，并尽可能保持两端效果一致。", en: "<strong>Background:</strong> the Tianxia team decided to ship the same large map on PC (BigWorld) and mobile (Messiah), requiring BigWorld scenes to be imported into Messiah while keeping visuals as consistent as possible.", ja: "<strong>背景：</strong>天下チームはPC（BigWorld）とモバイル（Messiah）で同じ大規模マップを同時に展開することを決定。BigWorldのシーンをMessiahへ取り込み、両端の表現を可能な限り一致させる必要があった。" },
    "t.cv.scene.tech": { zh: "<strong>技术原理：</strong>在 Messiah 端开发与 BigWorld 功能对应的地形 Shader；转换工具读取 BigWorld 地形数据并转为 Messiah 地形数据，读取旧场景模型 Transform 信息后导入新引擎，最终实现场景与地形的跨引擎转换。", en: "<strong>Approach:</strong> build a terrain shader in Messiah matching BigWorld's; the converter reads BigWorld terrain data into Messiah terrain data and imports old scene transforms into the new engine for full scene and terrain conversion.", ja: "<strong>技術原理：</strong>Messiah側にBigWorldと同等の地形シェーダーを開発。変換ツールがBigWorldの地形データを読み込みMessiahの地形データへ変換し、旧シーンのTransform情報を読み取って新エンジンに取り込むことで、シーンと地形のクロスエンジン変換を実現。" },
    "t.cv.scene.merge": { zh: "<strong>模型合并与材质去重：</strong>端游模型拆分非常细碎，一个建筑可能由几十个子模型组成，合并为大模型后材质 ID 暴增；工具会检查合并后模型引用的贴图，对引用相同贴图的材质 ID 进行合并去重。", en: "<strong>Model merging & material dedup:</strong> PC models are finely split—a building may have dozens of sub-meshes—so merged models explode in material IDs; the tool checks referenced textures and deduplicates material IDs sharing the same texture.", ja: "<strong>モデル結合とマテリアルの重複排除：</strong>PCのモデルは細かく分割されており、1つの建物が数十のサブメッシュからなることも。結合するとマテリアルIDが急増するため、参照テクスチャを検査し、同じテクスチャを参照するマテリアルIDを統合・重複排除する。" },
    "t.cv.scene.pack": { zh: "<strong>贴图合并与 UV 整理：</strong>端游贴图多为 512x512 或更小的四方图、256x512 或更小的长图，工具会合并贴图，并整理引用这些贴图的材质 ID 对应的 UV。", en: "<strong>Texture packing & UV remap:</strong> PC textures are mostly 512x512 (or smaller) square or 256x512 (or smaller) strips; the tool packs them and remaps the UVs of the material IDs that reference them.", ja: "<strong>テクスチャ統合とUV整理：</strong>PCのテクスチャは主に512x512以下の正方形、または256x512以下の長方形。ツールはこれらを統合し、参照するマテリアルIDのUVを整理する。" },
    "t.cv.scene.terrain": { zh: "<strong>地形混合：</strong>Messiah 地形采用 IndexMap（无混合图）方案，在 Shader 内做特殊处理自混合；为保持一致，移植 BigWorld 地形 Shader，使用两张贴图八个通道进行地形混合，地形种类沿用 Messiah 的 Index 方式，并对悬崖峭壁采样做特殊处理，相关信息记录在 Chunk 信息图中。", en: "<strong>Terrain blending:</strong> Messiah uses an IndexMap (no blend maps) with special self-blending in the shader; to stay consistent, BigWorld's terrain shader was ported to blend via eight channels across two textures, while terrain types keep Messiah's index scheme and cliffs use special handling recorded in a chunk info map.", ja: "<strong>地形ブレンド：</strong>MessiahはIndexMap方式（ブレンドマップなし）で、シェーダー内で特殊なセルフブレンドを行う。表現を一致させるためBigWorldの地形シェーダーを移植し、2枚のテクスチャの8チャンネルで地形をブレンド。地形種別はMessiahのIndex方式を維持し、崖のサンプリングはChunk情報マップに記録した特殊処理を行う。" },
    "t.cv.scene.result": { zh: "<strong>结果：</strong>最终结合 Messiah 原有 IndexMap 与 BigWorld 的 SplatMap 方案，实现两端效果一致。", en: "<strong>Result:</strong> combining Messiah's IndexMap with BigWorld's SplatMap produced consistent visuals on both ends.", ja: "<strong>結果：</strong>MessiahのIndexMapとBigWorldのSplatMapを組み合わせ、両端で一貫した表現を実現した。" },
    "t.cv.scene.cap1": { zh: "场景转换流程", en: "Scene conversion pipeline", ja: "シーン変換パイプライン" },
    "t.cv.scene.cap2": { zh: "模型合并与材质去重", en: "Model merging & material dedup", ja: "モデル結合とマテリアルの重複排除" },
    "t.cv.scene.cap3": { zh: "贴图合并与 UV 整理", en: "Texture packing & UV remap", ja: "テクスチャ統合とUV整理" },
    "t.cv.scene.cap4": { zh: "地形混合方案", en: "Terrain blending", ja: "地形ブレンド" },
    "t.cv.scene.cap5": { zh: "地形编号尺寸与特殊开关贴图", en: "Terrain index, scale & switch map", ja: "地形インデックス・スケール・スイッチマップ" },
    "t.cv.scene.cap6": { zh: "地形混合权重图", en: "Terrain blend weight map", ja: "地形ブレンドウェイトマップ" },
    "t.cv.scene.cap7": { zh: "地形类型贴图", en: "Terrain type map", ja: "地形タイプマップ" },
    "t.cv.scene.cap8": { zh: "最终效果 · BigWorld", en: "Final result · BigWorld", ja: "最終結果 · BigWorld" },
    "t.cv.scene.cap9": { zh: "最终效果 · Messiah", en: "Final result · Messiah", ja: "最終結果 · Messiah" },
    "t.cv.fx": { zh: "粒子特效转换方案", en: "Particle Effect Conversion", ja: "パーティクル変換ソリューション" },
    "t.cv.fx.bg": { zh: "<strong>背景：</strong>提供 BigWorld → Messiah 的粒子特效转换工具，用户只需配置几个路径即可一键转换，还原度较高，仅需少量后续调整即可使用。", en: "<strong>Background:</strong> a BigWorld→Messiah particle converter where users only configure a few paths for one-click conversion with high fidelity and minimal post-fixes.", ja: "<strong>背景：</strong>BigWorld→Messiahのパーティクル変換ツールを提供。いくつかのパスを設定するだけでワンクリック変換でき、再現度が高く、わずかな調整で使用できる。" },
    "t.cv.fx.tech": { zh: "<strong>技术原理：</strong>两边引擎都使用 XML 记录粒子特效信息，且部分组件参数类似；工具解析 BigWorld 的 XML 后先与 Messiah 通信，把贴图资源信息作为参数发送过去，调用接口导入贴图并新建粒子，再通过 ModelLib 导入模型资源，最后整合 BigWorld 的 XML 信息与导入的贴图、模型，构建 Messiah 粒子 XML。", en: "<strong>Approach:</strong> both engines store particle effects as XML with similar components. The tool parses BigWorld XML, talks to Messiah to import textures and create particles, imports models via ModelLib, and combines everything into a Messiah particle XML.", ja: "<strong>技術原理：</strong>両エンジンともXMLでパーティクル情報を保持し、一部のコンポーネントは似ている。ツールはBigWorldのXMLを解析した後、Messiahと通信してテクスチャをインポートしパーティクルを新規作成。ModelLibでモデルを読み込み、BigWorldのXML情報と統合してMessiahのパーティクルXMLを構築する。" },
    "t.cv.fx.effect": { zh: "<strong>效果：</strong>整体转换可替代约 80%–90% 的人工制作环节，部分简单特效可达到 100% 转换。", en: "<strong>Result:</strong> conversion replaces about 80–90% of manual work, reaching 100% for simple effects.", ja: "<strong>効果：</strong>変換により手作業の約80〜90%を削減。シンプルなエフェクトでは100%変換が可能。" },
    "t.cv.fx.cap1": { zh: "特效转换流程", en: "Effect conversion pipeline", ja: "エフェクト変換パイプライン" },
    "t.cv.fx.cap2": { zh: "BigWorld", en: "BigWorld", ja: "BigWorld" },
    "t.cv.fx.cap3": { zh: "Messiah", en: "Messiah", ja: "Messiah" },
    "t.cv.fx.cap4": { zh: "粒子特效转换工具界面", en: "Particle converter UI", ja: "パーティクル変換ツールUI" },

    "t.tl.title": { zh: "美术工具开发", en: "Art Tool Development", ja: "アートツール開発" },
    "t.tl.meta": { zh: "Tools · 2020 – 2026", en: "Tools · 2020 – 2026", ja: "Tools · 2020 – 2026" },
    "t.tl.intro": { zh: "围绕贴图制作与 Shader 管理自研的引擎 / 美术工具，提升美术团队的工作效率与规范性。", en: "In-house engine and art tools for texture production and shader management that make the art team faster and more consistent.", ja: "テクスチャ制作とシェーダー管理のための自社製エンジン／アートツール。アートチームの効率と一貫性を向上。" },
    "t.tl.ai": { zh: "Messiah 贴图 AI 重绘优化工具", en: "Messiah AI Texture Redraw Tool", ja: "Messiah AIテクスチャ再描画ツール" },
    "t.tl.ai1": { zh: "贴图 AI 重绘：借助 AI 自动重绘并优化贴图质量，减少人工重复劳动。一键摆放套装：将套装相关贴图资源一键整理、摆放到规范位置。", en: "AI texture redraw automatically repaints and optimizes textures to cut manual work; one-click outfit placement organizes related textures into standard positions.", ja: "AIテクスチャ再描画で品質を自動的に最適化し、手作業を削減。ワンクリック衣装配置で関連テクスチャを規定の位置へ整理する。" },
    "t.tl.ai.cap1": { zh: "贴图 AI 重绘", en: "AI texture redraw", ja: "AIテクスチャ再描画" },
    "t.tl.ai.cap2": { zh: "重绘界面：选择区域重绘", en: "Redraw UI: select region", ja: "再描画UI：領域を選択" },
    "t.tl.ai.cap3": { zh: "一键摆放套装", en: "One-click outfit placement", ja: "ワンクリック衣装配置" },
    "t.tl.ai.cap4": { zh: "各部件列表", en: "Part list", ja: "パーツ一覧" },
    "t.tl.ai.cap5": { zh: "各部件拼接后模型", en: "Assembled model", ja: "組み立て後のモデル" },
    "t.tl.shader": { zh: "Shader 分析管理工具", en: "Shader Analysis Tool", ja: "シェーダー解析ツール" },
    "t.tl.shader1": { zh: "头文件引用分析：分析 Shader 的头文件引用关系，帮助梳理依赖。寄存器冲突分析：检测 Shader 寄存器冲突，支持批量检测。Shader 批量编译：批量编译 Shader，便于快速验证与排查。", en: "Header reference analysis maps shader includes and dependencies; register conflict detection supports batch checking; batch compilation speeds up validation and debugging.", ja: "ヘッダー参照解析でシェーダーの依存関係を整理。レジスタ競合解析は一括検出に対応。一括コンパイルで検証とトラブルシュートを効率化。" },
    "t.tl.shader.cap1": { zh: "头文件引用分析", en: "Header reference analysis", ja: "ヘッダー参照解析" },
    "t.tl.shader.cap2": { zh: "寄存器冲突分析", en: "Register conflict analysis", ja: "レジスタ競合解析" },
    "t.tl.shader.cap3": { zh: "Shader 批量编译", en: "Batch shader compilation", ja: "シェーダー一括コンパイル" },
    "t.tl.shader.cap4": { zh: "寄存器冲突批量检测", en: "Batch register conflict check", ja: "レジスタ競合一括検出" }
  };

  var I18N = { zh: {}, en: {}, ja: {} };
  Object.keys(STRINGS).forEach(function (key) {
    I18N.zh[key] = STRINGS[key].zh;
    I18N.en[key] = STRINGS[key].en;
    I18N.ja[key] = STRINGS[key].ja;
  });

  var LANGS = [
    { code: "zh", label: "中文" },
    { code: "en", label: "EN" },
    { code: "ja", label: "日本語" }
  ];

  function getLang() {
    try {
      var saved = localStorage.getItem("site-lang");
      if (saved && I18N[saved]) {
        return saved;
      }
    } catch (e) {}
    return "zh";
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.zh;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-meta");
      if (dict[key] != null) {
        el.setAttribute("content", dict[key]);
      }
    });

    document.documentElement.lang = lang === "ja" ? "ja" : lang === "en" ? "en" : "zh-CN";

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function saveLang(lang) {
    try {
      localStorage.setItem("site-lang", lang);
    } catch (e) {}
  }

  function buildSwitcher() {
    var nav = document.createElement("nav");
    nav.className = "lang-switch";
    nav.setAttribute("aria-label", "Language");

    LANGS.forEach(function (l) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-btn";
      btn.setAttribute("data-lang", l.code);
      btn.textContent = l.label;
      btn.addEventListener("click", function () {
        saveLang(l.code);
        applyLang(l.code);
      });
      nav.appendChild(btn);
    });

    var host = document.querySelector(".header-actions") || document.querySelector(".header-inner");
    if (host) {
      host.appendChild(nav);
    }
  }

  function injectStyles() {
    var style = document.createElement("style");
    style.textContent = [
      ".lang-switch{display:inline-flex;align-items:center;border:1px solid #b8cee2;border-radius:6px;overflow:hidden;background:#fff;margin-left:4px}",
      ".lang-btn{min-height:34px;padding:0 11px;border:none;background:transparent;color:var(--muted,#5d6b79);font:inherit;font-size:13px;font-weight:700;line-height:1;cursor:pointer;transition:color .15s ease,background .15s ease}",
      ".lang-btn:hover{color:var(--blue,#2563a6)}",
      ".lang-btn.is-active{color:#fff;background:var(--blue,#2563a6)}",
      ".lang-btn+.lang-btn{border-left:1px solid #b8cee2}",
      "@media (max-width:620px){.lang-btn{padding:0 9px}}"
    ].join("");
    document.head.appendChild(style);
  }

  function init() {
    injectStyles();
    buildSwitcher();
    applyLang(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
