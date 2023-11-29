export type career = {
  company: string,
  position: string,
  period: string,
  comment?: string
}

export const careers: career[] = [
  {
    company: "チームラボ株式会社",
    position: "短期インターン",
    period: "2023年8月",
    comment: "Pythonで社内で使うツールを作りました。"
  },
  {
    company: "日本経済新聞社",
    position: "長期インターン",
    period: "2023年11月 ~ 現在",
    comment: "いろいろしてます。"
  },
]