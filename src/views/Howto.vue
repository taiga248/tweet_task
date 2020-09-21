<template>
  <v-container>
    <v-layout row wrap class="mx-4 mb-10">
      <v-flex xs12 sm12 md3>
        <HowToMenu :titles="titles" />
      </v-flex>
      <v-flex xs12 sm12 md9>
        <HowToIndex :titles="titles" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HowToMenu from "@/components/HowTo/HowToMenu";
import HowToIndex from "@/components/HowTo/HowToIndex";
export default {
  components: {
    HowToMenu,
    HowToIndex
  },
  data() {
    return {
      titles: [
        {
          title: "・Knowderとは",
          content:
            "作業した時間と作業の内容を記録し、あなたの振り返りとモチベーションを助けます。"
        },
        {
          title: "・作業を記録する",
          content:
            "作業内容を記録しましょう。記録できる項目は「仕事」、「勉強」、「課題」の３種類です。記入した後、送信するとグラフに反映されます。"
        },
        {
          title: "・ツイートする",
          content:
            "総作業時間をシェアできます。積極的にツイートし、あなたのフォロワーと競いましょう。ツイートするアカウントはTwitter上で選択してください。"
        },
        {
          title: "・みんなの記録を見る",
          content:
            "(未実装)自分の記録を確認できるのは当然として、Knowderに登録している全てのユーザーの現状を知ることができます。他のユーザーとコンタクトをとることはできません。今後トーク機能が実装され、コンタクトが取れるようになるかもしれません。"
        },
        {
          title: "・プロフィールを変更する",
          content:
            "アカウントページEditボタンで編集できます。画像、名前の変更はできません。これらはGoogleアカウントの情報に紐付いています。変更したい場合はGoogle上で変更してください"
        },
        {
          title: "・ログアウトする",
          content:
            "左上のメニューバー下部に置かれたログアウトボタンでできます。ログアウトしてもデータはGooGleアカウントに紐付いて保存されており、消えることはありません。"
        }
      ]
    };
  }
};
</script>
