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
</template>

<style scoped>
h2 {
  color: #0474FF;
  text-decoration: underline;
}

img {
  height: 50px;
  width: 50px;
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
</style>