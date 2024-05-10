// 一言参数类型
export interface iHitokotoP {
  c?: string // 句子类型
  max_length?: number // 最大长度
  min_length?: number // 最小长度
  encode?: string // 返回结果编码
  charset?: string // 字符集
  callback?: Function // 调用的异步函数
  select?: string // 选择器。配合 encode=js 使用
}

// 一言返回结果类型
export interface iHitokoto {
  commit_from: string // 提交方式
  created_at: string // 添加时间
  creator: string // 添加者
  creator_uid: number // 添加者用户标识
  from: string // 一言的出处
  from_who: string // 一言的作者
  hitokoto: string // 一言正文。编码方式 unicode。使用 utf-8。
  id: number // 一言标识
  length: number // 句子长度
  type: string // 类型
  uuid: string // 一言唯一标识；可以链接到 https://hitokoto.cn?uuid=[uuid] 查看这个一言的完整信息
  reviewer: string // 审核员标识
}
