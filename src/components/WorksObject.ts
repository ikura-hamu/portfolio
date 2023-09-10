export type work = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  service?: string;
  serviceImage?: string;
  blog?: string;
}

export const works: work[] = [
  {
    title: "traP Collection",
    description: "traP Collectionは、部内で用いるゲームランチャーです。サーバーサイドの実装を担当しました。Go言語とMariaDBで動いています。 ゲームのファイルや画像をオブジェクトストレージに保存し、ランチャーの管理画面やランチャーそのものにファイルを配信しています。",
    image: "trap-collection-logo.png",
    tags: ["Go", "バックエンド", "MySQL"],
    github: "https://github.com/traPtitech/trap-collection-server",
  },
  {
    title: "Questions",
    description: "サークルの新歓用に作った質問箱サービスです。バックエンドを担当しました。GoとMariaDBで動いています。OAuthを用いて部員のみが回答できるようにするなどの工夫をしました。",
    image: "Questions.png",
    tags: ["Go", "バックエンド", "MySQL"],
    github: "https://github.com/ikura-hamu/questions",
    service: "https://questions-ui-silk.vercel.app",
    serviceImage: "Questions-logo.png",
    blog: "https://trap.jp/post/1842"
  },
  {
    title: "いかしかめかアクティビティズ",
    description: "サークルの2023年春ハッカソンで作ったWebアプリ（ゲーム）です。部内SNSのメッセージを使ったゲームで、優秀賞を獲得しました。設計から行い、interfaceを用いて疎結合を目指しつつ初心者にもわかりやすいディレクトリ構成を目指しました。",
    image: "ika-shika-meka.png",
    tags: ["Go", "バックエンド", "MySQL"],
    github: "https://github.com/traP-jp/h23s_01",
    blog: "https://trap.jp/post/1899"
  },
  {
    title: "Webエンジニアになろう講習会",
    description: "traPで毎年新入生向けに行われる講習会の2023年度講師を担当しました。資料はDBとDockerの章を書きました。初心者に伝えられるよう、語句の説明を増やすなど工夫しました。",
    image: "naro.png",
    tags: ["MySQL", "Docker", "Go", "バックエンド"],
    service: "https://traPtitech.github.io/naro-text",
    serviceImage: "naro.png",
    github: "https://github.com/traPtitech/naro-text",
    blog: "https://trap.jp/post/1969"
  },
  {
    title: "QRiP",
    description: "QRiPはマイナンバーカードとQRコードを用いた旅行支援ツールです。宮城県が主催した「みやぎハッカソン」(https://2023.hackathon.miyagi.jp/ ) にチーム「牛タンずんだ餅」で3日間で開発し、サーバーサイドを担当しました。",
    image: "QRiP.jpg",
    tags: ["Go", "バックエンド", "MySQL"],
  },
  {
    title: "Small and Large",
    description: "Unityで作った3Dゲームです。ボールを大きくしたり小さくしたりしながらギミックをクリアし、ゴールを目指します。",
    image: "SmallAndLarge.png",
    tags: ["Unity", "ゲーム"],
    blog: "https://trap.jp/post/1718/",
  },
  {
    title: "The Mystery of \"M\"",
    description: "Springin'で作成した謎解き脱出ゲームです。「第1回 Neo Creators' Award」で審査員賞を頂きました。全3編通してお楽しみください。",
    image: "TheMysteryOfM.png",
    tags: ["Springin'", "ゲーム"],
    blog: "https://www.springin.org/awards/neo_creators_award_1/",
    service: "https://www.springin.org/work/?uuid=3EE7B815-80FF-4962-B742-2670721926D9",
    serviceImage: "TheMysteryOfM.png",
  },
  {
    title: "ポートフォリオサイト",
    description: "このサイトです。フロントエンドの練習として、Vue3+Typescriptで作りました。ここからブログ機能などを追加していきたいです。",
    image: "ikura-hamu_icon.png",
    tags: ["Vue.js", "フロントエンド"],
    service: "https://portfolio.ikura-hamu.work",
    serviceImage: "ikura-hamu_icon.png",
    github: "https://github.com/ikura-hamu/portfolio",
  }
]