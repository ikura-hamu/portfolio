<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const emailAddress = ref('')
const message = ref('')

function sendMessage(n: string, email: string, mes: string) {
  if (n === '' || email === '' || mes === '') {
    alert('入力されていない項目があります。')
    return
  }

  if (!RegExp('^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$').test(email)) {
    alert('有効なメールアドレスを入力してください')
    return
  }

  let now = new Date()
  let mess = '**from**: ' + n + '\n**e-mail**: `' + email + '`\n**message**: \n> ' + mes + `\n**datetime**: ` + now.getFullYear() + '/' + now.getMonth() + '/' + now.getDate() + '\t' + now.getHours() + ':' + now.getMinutes()

  fetch(import.meta.env.VITE_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: mess
    }),
  }).then((res) => {
    if (!res.ok) {
      alert('メッセージの送信に失敗しました。')
      return
    }

    name.value = ''
    emailAddress.value = ''
    message.value = ''
    alert('メッセージありがとうございます！気が向いたら回答するかもしれません！！')

  })
}

console.log(import.meta.env.VITE_WEBHOOK_URL)
</script>

<template>
  <h2>contact</h2>

  <div class="account">
    <img src="../assets/images/github-mark.png">
    <div class="account_name">
      <a href="https://github.com/ikura-hamu" target="_blank" rel="noopener noreferrer">
        <strong>@ikura-hamu</strong>
      </a>
    </div>
  </div>
  <div class="account">
    <img src="../assets/images/Twitter.png">
    <div class="account_name">
      <a href="https://twitter.com/ikura_hamu" target="_blank" rel="noopener noreferrer">
        <strong>@ikura_hamu</strong>
      </a>
    </div>
  </div>
  <div class="account">
    <img src="../assets/images/article_material.png">
    <div class="account_name">
      <a href="https://trap.jp/author/ikura-hamu" target="_blank" rel="noopener noreferrer">traPのブログ</a>
    </div>
  </div>
  <br />
  <div class="messages">
    <h3>いくら・はむに直接語り掛ける</h3>
    <div>
      例
      <ul class="example">
        <li>好きな食べ物は何ですか。</li>
        <li>しゃべりたいです。</li>
        <li>ラーメンおごってあげる。</li>
      </ul>
    </div>
    <div>
      <label for="name">お名前</label>
      <input class="name" name="name" v-model="name" />
    </div>
    <div>
      <label for="mail_address">メールアドレス</label>
      <input class="mail_address" name="mail_address" v-model="emailAddress" />
    </div>
    <div>
      <label for="message">メッセージ</label>
      <textarea class="message" name="message" v-model="message" />
    </div>
    <div class="button_wrapper">
      <button class="send_button" @click="sendMessage(name, emailAddress, message)">いくら・はむに直接語り掛けるボタン</button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #0474FF;
  text-decoration: underline;
}

h3 {
  color: #0474FF;
  text-decoration: underline;
}

img {
  height: 40px;
  width: 40px;
  margin-left: auto;
  margin-right: auto;
}

.account {
  display: grid;
  grid-template-columns: 80px calc(100% - 80px);
  padding-top: 16px;
  padding-bottom: 16px;
}

.account_name {
  display: flex;
  align-items: center;
}

.account_name a {
  font-size: larger;
  color: #0474FF;
  text-underline-offset: 4px;
}

.example {
  margin-left: 16px;
}

.name {
  width: 95%;
  height: 30px;
  border-radius: 8px;
  border: 2px solid;
  border-color: #D9D9D9;
  font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  padding: 4px;
  margin-left: 0;
  margin-right: 0;
}

.mail_address {
  width: 95%;
  height: 30px;
  border-radius: 8px;
  border: 2px solid;
  border-color: #D9D9D9;
  font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  padding: 4px;
  margin-left: auto;
  margin-right: auto;
}

.message {
  width: 95%;
  height: 200px;
  border-radius: 8px;
  border: 2px solid;
  border-color: #D9D9D9;
  font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  padding: 4px;
  margin-left: auto;
  margin-right: auto;
  resize: none;
}

.button_wrapper {
  text-align: right;
  width: 95%;
}

.send_button {
  width: 80%;
  height: 30px;
  border-radius: 8px;
  border: 2px solid;
  border-color: #D9D9D9;
  font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  padding: 4px;
  background-color: #D9D9D9;
  color: #000000;
  font-weight: bold;
}

.send_button:hover {
  background-color: #0474FF;
  color: #FFFFFF;
}
</style>