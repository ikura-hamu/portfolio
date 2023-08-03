export type skill = {
  skill: string,
  level: number,
  comment?: string
}

export const skills: skill[] =[
  {
    skill: "Go",
    level: 5,
    comment: "めっちゃ好きです"
  },
  {
    skill: "MySQL, MariaDB",
    level: 4,
    comment: "SQLを書くのは好きです"
  },
  {
    skill: "Docker",
    level: 4,
    comment: "普段の開発で使っています"
  },
  {
    skill: "Vue.js",
    level: 2,
    comment: "ちょっとだけわかります"
  },
  {
    skill: "Unity",
    level: 2,
  }
]