"use strict";(self.webpackChunkwanderedtola_blog=self.webpackChunkwanderedtola_blog||[]).push([[6880],{8256:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"frontend-environment","metadata":{"permalink":"/blog/frontend-environment","editUrl":"https://github.com/WanderedToLa/wanderedtola.blog/tree/master/blog/2024-07-19-frontend/index.md","source":"@site/blog/2024-07-19-frontend/index.md","title":"\uc548\uc804\ud55c \uc11c\ube44\uc2a4\ub97c\uc704\ud55c \ud658\uacbd\uad6c\uc131 in frontend","description":"\uc5bc\ub9c8\uc804 \ud1a0\uc2a4\uacfc\uc81c\ub97c \uc9c4\ud589\ud558\uba70 \uc54c\uac8c\ub41c \uc810\ub4e4\uc740 \ub9e4\ub044\ub7ec\uc6b4 \uc0ac\uc6a9\uc790\uacbd\ud5d8\uc744 \uc704\ud574 frontend \ub85c\uc9c1\ubfd0 \uc544\ub2c8\ub77c","date":"2024-07-19T00:00:00.000Z","formattedDate":"July 19, 2024","tags":[{"label":"frontend","permalink":"/blog/tags/frontend"},{"label":"environment","permalink":"/blog/tags/environment"},{"label":"dependencies","permalink":"/blog/tags/dependencies"},{"label":"transplier","permalink":"/blog/tags/transplier"},{"label":"git","permalink":"/blog/tags/git"}],"readingTime":12.545,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"frontend-environment","title":"\uc548\uc804\ud55c \uc11c\ube44\uc2a4\ub97c\uc704\ud55c \ud658\uacbd\uad6c\uc131 in frontend","authors":["WanderedToLa"],"tags":["frontend","environment","dependencies","transplier","git"]},"unlisted":false,"nextItem":{"title":"docusaurus custom plugin \ub9cc\ub4e4\uae30","permalink":"/blog/docusaurus-plugin"}},"content":"\uc5bc\ub9c8\uc804 \ud1a0\uc2a4\uacfc\uc81c\ub97c \uc9c4\ud589\ud558\uba70 \uc54c\uac8c\ub41c \uc810\ub4e4\uc740 \ub9e4\ub044\ub7ec\uc6b4 \uc0ac\uc6a9\uc790\uacbd\ud5d8\uc744 \uc704\ud574 frontend \ub85c\uc9c1\ubfd0 \uc544\ub2c8\ub77c  \\n\ubcf4\uc774\uc9c0 \uc54a\ub294 \ud658\uacbd\uc124\uc815\uc5d0\ub3c4 \uc5c4\uccad\ub09c \ub178\ub825\uc744 \ud558\uace0\uc788\uc74c\uc744 \uc54c\uac8c\ub418\uc5c8\ub2e4. \uc774\uc804\uc5d0 \uac1c\ubc1c\uc744 \ud558\uba70  \\n\uc54c\uace0\ub294 \uc788\uc9c0\ub9cc \uc790\uc138\ud558\uac8c \ubab0\ub790\ub358 \ubd80\ubd84\uacfc \uadf8\ub4e4\uc758 \ub514\ud14c\uc77c\uc5d0 \ub180\ub77c\uc6cc\ud558\uba70 \uba74\uc811\uc900\ube44\ub97c \ud588\ub294\ub370  \\n\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 \uacfc\uc815\uc5d0\uc11c \uc54c\uac8c\ub41c \uc0ac\uc2e4\ub4e4\uc744 \uc815\ub9ac\ud55c\ub2e4.\\n\\n:::important \ucc38\uace0\\nYoutube \ubc0f toss tech blog\ub97c \ucc38\uace0\ud558\uc5ec \uc791\uc131\ud55c \uae00 \uc785\ub2c8\ub2e4.\\n:::\\n\\n## dependencies in Package.json\\n\\n\uc6b0\ub9ac\uac00 \uac1c\ubc1c\uc744\ud558\uba70 \ud328\ud0a4\uc9c0\ub9e4\ub2c8\uc800\ub97c \ud1b5\ud574 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc124\uce58\ud560 \ub54c\ub294\\n`package.json` \ub0b4\uc758 `dependencies` \ud544\ub4dc\ub97c \ud1b5\ud574 \uc758\uc874\uc131\uc744 \uaddc\uc815\ud558\ub294\uac83\uc73c\ub85c \uc124\uce58\ud55c\ub2e4\\n\uc774\ub54c \ud574\ub2f9 \ud328\ud0a4\uc9c0\uc758 \uc774\ub984\uacfc \ubc84\uc804\ubc94\uc704\ub97c \uc9c0\uc815\ud55c \uac1d\uccb4\ub97c \ud1b5\ud574 \uc124\uce58\ud558\ub294\ub370\\n\ubc84\uc804\uc758 \ubc94\uc704\ub294 \ud558\ub098 \ud639\uc740 \uc5ec\ub7ec\uac1c\uc758 \uacf5\ubc31\uc73c\ub85c \ubd84\ub9ac\ub41c \ubb38\uc790\uc5f4\uc774\ub2e4.  \\n\ubc84\uc804\ubc94\uc704\ub97c \uc9c0\uc815\ud558\ub294 \uc790\uc138\ud55c \ubc29\ubc95\uc740 [semver](https://docs.npmjs.com/misc/semver)\ub97c \ucc38\uace0\\n\\n\ub9cc\uc57d \uac1c\ubc1c\uc911\uc5d0\ub9cc \ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc77c \uacbd\uc6b0 `devDependencies`\ud544\ub4dc\ub97c \ud65c\uc6a9\ud558\uba70\\n\\n```bash\\nnpm install some-package --save-dev\\n```\\n\\n\uc704\uc640 \uac19\uc740 \uba85\ub839\uc5b4\ub85c \uc124\uce58 \uac00\ub2a5\ud558\uace0 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58 \ud6c4 `devDependencies`\uc5d0 \ucd94\uac00\ud55c\ub2e4.  \\n\uc5ec\uae30\uc11c \ub9cc\uc57d \ub0b4\uac00 clone\ub41c repository\uc5d0\uc11c `npm install`\ud588\uc744 \uacbd\uc6b0 npm\uc740 \uc774\ub97c \ud504\ub85c\uc81d\ud2b8\ub97c  \\n\uac1c\ubc1c\uc911\uc774\ub77c\uace0 \uc778\uc2dd\ud558\uace0 `devDependencies`\uc5d0 \ucd94\uac00\ud558\ub2c8 \uc720\uc758\ud560 \uac83.\\n\\n\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubcf8\uc778\ub9cc\uc758 plugin\uc744 \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9\ud558\ub294 `peerDependencies`\uc778\ub370  \\n\uc815\uc758\uc5d0 \ub530\ub974\uba74 \uc0c1\uc18d\ub418\ub294 \uc758\uc874\uc131\uc73c\ub85c \ud328\ud0a4\uc9c0\ub97c \uc0ac\uc6a9\ud558\ub294 \uacf3\uc5d0\uc11c \uc81c\uacf5\ud574\uc57c\ud558\ub294 \uc758\uc874\uc131\uc774\ub2e4.  \\n\ub9cc\uc57d \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc5d0\uc11c \ud328\ud0a4\uc9c0\ub97c `peerDependencies`\ub85c \uba85\uc2dc\ud560 \uacbd\uc6b0 \ud328\ud0a4\uc9c0\ub97c \uc81c\uacf5\ud558\ub294 \ucc45\uc784\uc744  \\n\uac00\uc7a5 \uc0c1\uc704\ud504\ub85c\uc81d\ud2b8\ub85c \ubc14\uafb8\uae30 \ub54c\ubb38\uc5d0 \ubc88\ub4e4\ub9c1 \uacb0\uacfc\uc5d0\uc11c \uc911\ubcf5\uc744 \ub9c9\uc744 \uc218 \uc788\ub2e4.\\n\\n\ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \uc7a5\uc810\uc5d0\ub3c4 \uce58\uba85\uc801\uc778 \ub2e8\uc810\uc740 \uc758\uc874\uc131 \uc804\ud30c\ubb38\uc81c\uc774\ub2e4.\\n\\n```json\\npackage A:\\n    peerDependencies:\\n            \\"package P\\"\\npackage B:\\n        dependencies:\\n            \\"package A\\"\\n    peerDependencies:\\n            \\"package P\\"\\npackage C\\n        dependencies:\\n            \\"package B\\"\\n    peerDependencies:\\n            \\"package P\\"\\n```\\n\\n\uc704\uc640 \uac19\uc774 peerDependency\ub97c \uc0ac\uc6a9\ud558\ub294 `package A`\uc5d0\uc11c A\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub4e4\uc740\\nA\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc74c\uc5d0\ub3c4 peerDependencies\uc5d0 \ucd94\uac00\ud574\uc8fc\uc5b4\uc57c \ud558\uba70 \uc774\ub294 \uc758\uc874\uc131\uc758 \uad00\ub9ac\ubcf5\uc7a1\ub3c4\ub97c \uc99d\uac00\uc2dc\ucf1c  \\n\uc5d0\ub7ec\uc758 \ud655\ub960\uc744 \ub192\uc778\ub2e4 npm\uacfc \uac19\uc740 \ud328\ud0a4\uc9c0\ub9e4\ub2c8\uc800\ub4e4\uc5d0\uc11c \uc774\ub7ec\ud55c \uc624\ub958\ub4e4\uc744 \uc5c4\ubc00\ud788 \uac80\uc0ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0\\n\uc720\uc758\ud574\uc57c \ud558\uba70 \ub530\ub77c\uc11c `peerDependencies`\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0  \\n\ub2e8 \ud558\ub098\uc758 \ud328\ud0a4\uc9c0\ub9cc \uc874\uc7ac\ud574\uc57c \ud558\ub294\uacbd\uc6b0(\uc2f1\uae00\ud1a4) \uc77c\ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.\\n\\n### dependencies\uc758 \ubb38\uc81c\uc810\\n\\n\uc704\uc640 \uac19\uc740 \ubb38\uc81c\ub9d0\uace0\ub3c4 `npm/node_modules`\uc758 \ubb38\uc81c\ub294 **\uc720\ub839\uc758\uc874\uc131(Phantom Dependency)** \ud604\uc0c1\uc774\ub2e4  \\nnode_modules\ub97c \uc0ac\uc6a9\ud558\ub294 yarn v1 \ubc0f npm\uc5d0\uc11c\ub294 \uc911\ubcf5\ud574\uc11c \uc124\uce58\ud558\ub294 \ubaa8\ub4c8\uc744 \ud53c\ud558\uae30 \uc704\ud574  \\n\ud638\uc774\uc2a4\ud305 \uae30\ubc95\uc744 \uc0ac\uc6a9\ud55c\ub2e4\\n\\n![Hoisting Tree](../../static/img/hoisting-tree.png)\\n\\n\uc67c\ucabd\uacfc \uac19\uc740 \uc758\uc874\uc131\ud2b8\ub9ac\uc77c \uacbd\uc6b0 \ub514\uc2a4\ud06c\uacf5\uac04\uc758 \uc808\uc57d\uc744 \uc704\ud574 \uc911\ubcf5\ub418\ub294 \ud2b8\ub9ac\ub97c \uc9c0\uc6b0\ub294 \uacfc\uc815\uc5d0\uc11c  \\n\uc9c1\uc811 \uc758\uc874\ud558\uace0 \uc788\uc9c0 \uc54a\uc558\ub358 `B(1.0)` \ud328\ud0a4\uc9c0\ub97c \ubd88\ub7ec\uc640 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.  \\npackage.json \uc5d0 \uba85\uc2dc\ud558\uc9c0 \uc54a\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud604\uc0c1\uc744 Phantom Dependency\ub77c\uace0 \ud558\uba70  \\n\uc774\ub7ec\ud55c \ud2b9\uc131\uc740 \uc2dc\uc2a4\ud15c\uc744 \ud63c\ub780\uc2a4\ub7fd\uac8c \ud558\uace0 \ucd5c\uc545\uc758 \uacbd\uc6b0 Runtime Error\uc758 \uac00\ub2a5\uc131\uc744 \ub192\ud78c\ub2e4.\\n\\n\ud1a0\uc2a4\ud300\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 `Yarn Berry + PnP`\ub97c \ub3c4\uc785\ud558\uba70 \ud574\uacb0\ud588\ub2e4.  \\nYarn Berry\ub294 `Plug\'n\'Play` \uc804\ub7b5\uc744 \uc774\uc6a9\ud558\uc5ec \uae30\uc874\uc758 Package.json\uc744 \uae30\ubc18\uc73c\ub85c \uc758\uc874\uc131 \ud2b8\ub9ac\ub97c  \\n\ub9cc\ub4e4\uc5b4 node_modules \uad6c\uc870\ub97c \uc0dd\uc131\ud558\ub358 \ubc29\uc2dd\uc5d0\uc11c \uc758\uc874\uc131 \uc124\uce58\uc2dc node_modules\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uace0  \\n`.yarn/cache`\ud3f4\ub354\uc5d0 \uc758\uc874\uc131 \uc815\ubcf4\ub97c \uc800\uc7a5\ud55c\ub2e4 \ub610\ud55c `.pnp.cjs` \ud30c\uc77c\uc5d0 \uc758\uc874\uc131\uc744 \ucc3e\uc744 \uc218 \uc788\ub294  \\n\uc815\ubcf4\ub97c \uae30\ub85d\ud558\uc5ec \ud6a8\uc728\uc801\uc778 \ud328\ud0a4\uc9c0 \uad00\ub9ac\ub97c \ud560 \uc218 \uc788\ub2e4.\\n\\nyarn\uc740 \uae30\uc874 node.js\uc758 `require`\ud568\uc218\ub97c \ub36e\uc5b4\uc50c\uc6cc \ub3d9\uc791\ud558\uba70 \ud6a8\uc728\uc801\uc778 \ud328\ud0a4\uc9c0\uad00\ub9ac\ub97c  \\n\ud560 \uc218 \uc788\uace0 \uc774\ub54c\ubb38\uc5d0 \ud2b9\uc815 \ud328\ud0a4\uc9c0\uc640 \uc758\uc874\uc131\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \ud544\uc694\ud560 \ub54c \ubc14\ub85c \uc54c \uc218 \uc788\ub2e4  \\n\ub610\ud55c Yarn PnP \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uac01 \uc758\uc874\uc131\uc740 Zip \uc544\uce74\uc774\ube0c\ub85c \uad00\ub9ac\ud558\uac8c \ub418\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc740 \uc7a5\uc810\uc774 \uc0dd\uae34\ub2e4\\n\\n1. node_modules\uac00 \uc5c6\uc74c -> \ube60\ub978 \uc124\uce58 \uac00\ub2a5\\n2. \ud328\ud0a4\uc9c0\ub4e4\uc740 \ud558\ub098\uc758 Zip\uc544\uce74\uc774\ube0c\ub85c \uc800\uc7a5\ud558\uc5ec \uc911\ubcf5\ubc29\uc9c0\\n3. \ud30c\uc77c\uc758 \uc218\uac00 \uc801\uc5b4\uc9c0\uba70 \ubcc0\uacbd\uc0ac\ud56d\uc758 \uac10\uc9c0\uac00 \uc26c\uc6cc\uc9c0\uace0 \uc0ad\uc81c\uac00 \ube60\ub974\ub2e4.\\n\\n### Zero Install\\n\\n\uc5ec\uae30\uc11c \ud55c\ubc1c \ub354 \ub098\uc544\uac00 \uc758\uc874\uc131\uc744 Git\uc73c\ub85c \uad00\ub9ac\ud55c\ub2e4\uba74 \uc5b4\ub5a8\uae4c?  \\n\uc77c\ubc18\uc801\uc778 node_modules\uc758 \ud06c\uae30\ub294 1.2GB/13\ub9cc5\ucc9c\uac1c\uc758 \ud30c\uc77c\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc yarn\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74  \\n139MB/2\ucc9c\uac1c\uc758 \uc555\ucd95\ud30c\uc77c\ub85c \uc904\uc5b4\ub4e0\ub2e4 \uc774\ub807\uac8c \uc904\uc5b4\ub4e0 \ud30c\uc77c\ud06c\uae30\ub294 Git\uc73c\ub85c \uad00\ub9ac\ud558\uc5ec \ubc84\uc804\uad00\ub9ac\uc5d0  \\n\ud3ec\ud568\uc2dc\ud0a4\uace0 \uc124\uce58\ud560\uac8c \uc544\uc608\uc5c6\ub294 \ud658\uacbd\uc744 \uad6c\uc131\ud55c\ub2e4.(Zero-Install)\\n\\n\ud1a0\uc2a4\ud300\uc5d0\uc11c Zero-Install\uc744 \uc0ac\uc6a9\ud558\uba70 \uc5bb\uc740 \uc7a5\uc810 \ub450 \uac00\uc9c0\\n\\n1. clone \ud639\uc740 branch\ubcc0\uacbd\uc2dc yarn install \uc2e4\ud589x\\n\\n   - \ub9cc\uc57d \ub2e4\ub978 \uc758\uc874\uc131\uc744 \uc0ac\uc6a9\ud558\ub294 \ube0c\ub79c\uce58\ub85c \uc774\ub3d9\ud55c\ub2e4\uba74 \uc7ac\uc124\uce58\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4.\\n\\n2. CI\ub3d9\uc791\uc2dc \uc758\uc874\uc131 \uc124\uce58\uc2dc\uac04 \uc808\uc57d\\n\\n   - cache miss \uc77c\uacbd\uc6b0 60 ~ 90\ucd08 \uac00\ub7c9 \uc18c\uc694\ub418\ub358 \uc2dc\uac04\uc744 \uc758\uc874\uc131 \ubcf5\uc81c\ub9cc\uc73c\ub85c  \\n     \ubc14\ub85c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\uc5ec \uc2dc\uac04\uc808\uc57d\\n\\n## Bundler\\n\\njavascript\uc5d0 \ubaa8\ub4c8\uc774\ub77c\ub294 \uac1c\ub150\uc774 \uc5c6\ub358\uc2dc\uc808 \uaddc\ubaa8\uac00 \ud070 \ud504\ub85c\uadf8\ub7a8\uc744 \uac1c\ubc1c\ud558\uae30 \uc704\ud574 \ud30c\uc77c\uc744 \ucabc\uac1c\uc11c \uc791\uc5c5\ud588\uc9c0\ub9cc  \\n\uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub97c \ud1b5\ud55c \uc804\uc5ed\ubcc0\uc218 \ucc38\uc870\ub97c \ud588\uae30\ub54c\ubb38\uc5d0 \ud568\uc218\ub098 \ubcc0\uc218\uc758 \uc774\ub984 \ucda9\ub3cc \ubb38\uc81c\ub97c \uc77c\uc73c\ud0a4\uace0  \\n\uaddc\ubaa8\uac00 \ucee4\uc9c8\uc218\ub85d \uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub4dc\uc2dc\uac04\uc774 \uc99d\uac00\ud558\uc5ec \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc5d0 \uc548\uc88b\uc740 \uc601\ud5a5\uc744 \ub07c\ucce4\ub2e4.\\n\\n\uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ud30c\uc77c\uc744 \ud558\ub098\ub85c \ud569\uce58\ub294 **\ubc88\ub4e4\ub9c1(Bundling)** \uc774\ub77c\ub294 \uac1c\ub150\uc774 \ud0c4\uc0dd\ud558\uace0  \\nCommonJS\uc758 `require`\ud568\uc218\uac00 \ub4f1\uc7a5\ud558\uba70 \uc774 \uc2dc\uc810\ubd80\ud130 \ud30c\uc77c\ub2e8\uc704\uc758 \uac1c\ubc1c\uc774 \uac00\ub2a5\ud574\uc9c0\uace0 \uc218\ucc9c\uac1c\uc758  \\nJS\ud30c\uc77c\ub85c \ubd84\ub9ac\ud558\uba70 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \uc26c\uc6b4 \uc7ac\uc0ac\uc6a9\uc131\uc744 \ud1b5\ud574 \ub354 \ub098\uc740 \uac1c\ubc1c\uacbd\ud5d8\uc744 \uc81c\uacf5\ud588\ub2e4.\\n\\n\ubaa8\ub4c8\uc758 \ud0c4\uc0dd\uacfc \ud568\uaed8 \uc0dd\uaca8\ub09c \ubc88\ub4e4\ub7ec\ub294 `CommonJS`\uc774\ud6c4\uc5d0\ub3c4 \uc0dd\uaca8\ub09c \ubaa8\ub4c8\uc5d0 \uc758\ud574 \uc124\uacc4\uc758 \uc601\ud5a5\uc744 \ubbf8\ucce4\uace0  \\n\uc9c0\uae08 \uc774\uc2dc\uc810\uc5d0\ub3c4 \uad49\uc7a5\ud788 \ub2e4\uc591\ud55c \ubc88\ub4e4\ub7ec\ub4e4\uc774 \uc788\uc9c0\ub9cc \ubc88\ub4e4\ub7ec\uc758 \ub3d9\uc791\uc740 \ud06c\uac8c \uc138 \uac00\uc9c0\ub85c \uad6c\ubd84\ud55c\ub2e4.\\n\\n1. Resolution\\n2. Load\\n3. Optimization\\n\\n### Resolution\\n\\nresolution\ub2e8\uacc4\uc5d0\uc11c\ub294 import/require\ub418\ub294 \ud30c\uc77c\uc758 \uc704\uce58\ub97c \uc815\ud655\ud558\uac8c \ucc3e\ub294\uc5ed\ud560\\n\\n```tsx\\nimport { App } from \'./App\';\\n```\\n\\nApp\uc744 import \ud558\ub294\uacbd\uc6b0 `./App`\uc758 \uc815\ud655\ud55c \uacbd\ub85c\ub97c \ud0d0\uc0c9\ud55c\ub2e4 (App.js, App.ts, App.tsx)  \\n\ubc88\ub4e4\ub7ec\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uc124\uc815\uc744 \uae30\ubcf8\uc81c\uacf5\ud558\uace0 \ud544\uc694\uc5d0\ub530\ub77c \ucee4\uc2a4\ud140\uac00\ub2a5.  \\n\uc774\ub807\uac8c \uc815\ud655\ud55c\uacbd\ub85c\ub97c \ud0d0\uc0c9\ud558\uc5ec \uc5b4\ub5a4\ud30c\uc77c\ub4e4\uc744 \ud569\uccd0\uc57c \ucd5c\uc885\uacb0\uacfc\ubb3c\uc774 \ub418\ub294\uc9c0 \uc54c \uc218 \uc788\ub2e4.\\n\\n### Load\\n\\nLoad\ub2e8\uacc4\uc5d0\uc11c\ub294 \ud45c\uc900 Javascript\ub85c \ubcc0\ud658\ud558\ub294 \uc5ed\ud560\uc744 \ud558\ub294\ub370 \ud604\ub300\uc758 \uc6f9 \uac1c\ubc1c\uc740  \\nHTML,CSS,Javascript\ub85c\ub9cc \uac1c\ubc1c\ud558\uae30\uc5d4 \uc5b4\ub824\uc6c0\uc774 \uc788\uace0 \uc774\ub97c \ubcf4\uc644\ud558\uace0\uc790 \uc288\ud37c\uc14b \uc5b8\uc5b4\ub4e4\uc774 \ub4f1\uc7a5\ud558\uc600\ub2e4.  \\n\uc774\uc5d0 \ub530\ub77c \ub300\ud45c\uc801\uc73c\ub85c Typescript\uc640 \uac19\uc740\uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uae30\uc704\ud574 \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub7ec\uac00 \ub4f1\uc7a5\ud558\uba70  \\n\ubc88\ub4e4\ub9c1\uacfc\uc815\uc5d0\uc11c `Babel/SWC`\uac19\uc740 \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub7ec\ub97c \uc218\uc6a9\ud558\uc5ec \ud45c\uc900Javascript \uc774\uc678\uc5d0\ub3c4 \uc0ac\uc6a9\uac00\ub2a5\ud55c  \\n\ud615\ud0dc\ub85c \ubc1c\uc804\ud588\ub2e4.\\n\\n\uc5ec\uae30\uc11c \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub7ec\ub294 \ud55c \uc5b8\uc5b4\ub97c \ucd94\uc0c1\ud654\ub2e8\uacc4\uac00 \ube44\uc2b7\ud55c \uc5b8\uc5b4\ub85c \ubcc0\ud658\ud574\uc8fc\ub294 \uc5ed\ud560\uc744\ud558\uc9c0\ub9cc  \\n\uc5b8\uc5b4 \uc804\uccb4\uc801\uc73c\ub85c \ud2b8\ub79c\uc2a4\ud30c\uc77c\ud558\uc9c0\ub294 \uc54a\ub294\ub2e4. \ubb38\ubc95\uc758 \ubb38\uc81c\uac00 \uc544\ub2cc \uc5b8\uc5b4\uc758 \ud45c\uc900\uc774 \ubcc0\uacbd\ub418\uac70\ub098 \uc0c8\ub85c\ucd94\uac00\ub418\ub294  \\n\ud568\uc218\uc758 \uacbd\uc6b0 `\ud3f4\ub9ac\ud544(polyfill)`\uacfc\uc815\uc744 \uac70\uccd0\uc57c\ud55c\ub2e4 \uad6c\ud604\uc774 \ub204\ub77d\ub41c \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \uba54\uafd4\uc8fc\ub294(fill in)  \\n\uc5ed\ud560\uc744 \ud558\uba70 \uae30\ub2a5\uc774\ub098 \uc0ac\uc6a9\uc790\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub530\ub77c \ub2e4\uc591\ud558\uac8c \uc124\uc815\ud560 \uc218 \uc788\ub2e4.\\n\\n### Optimization\\n\\nResolution/Load \ub2e8\uacc4\ub97c \uac70\uccd0 \uc644\uc804\ud55c JS\ud30c\uc77c \ud558\ub098\ub97c \uc0dd\uc131\ud588\ub2e4\uba74 \ub2e4\uc591\ud55c \uc758\uc874\uc131\uc744 \uc0ac\uc6a9\ud558\ub294  \\nJS\ud30c\uc77c\uc758 \ud06c\uae30\ub294 \ub108\ubb34 \ud06c\uae30 \ub54c\ubb38\uc5d0 \uc131\ub2a5\uc800\ud558\ub97c \uc720\ubc1c\ud560 \uc218 \uc788\ub2e4 \ub530\ub77c\uc11c \ud30c\uc77c \ud06c\uae30\ub97c \uc904\uc774\uae30\uc704\ud574  \\n\ub450 \uac00\uc9c0 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud568\\n\\n1. Minification (Compression + Mangling)\\n2. Tree Shaking\\n\\n**1-1. Minification - Compression \ucf54\ub4dc\uc758 text\ub97c \ucd5c\ub300\ud55c \uc555\ucd95**\\n\\n- undefined -> void 0\\n- 2 + 3 -> 5\\n- !a && !b -> !(a || b)\\n- Infinity -> 1/0\\n\\n**1-2. Minification - Mangling \ubcc0\uc218,Class,\ud30c\uc77c\uc774\ub984 \ucd5c\uc801\ud654**\\n\\n```javascript\\n// function add(num1, num2) { return num1 + num2 }\\nfunction add(l, r) {\\n  return l + r;\\n}\\n```\\n\\n**2. Tree Shaking \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc \uc81c\uac70**\\n\\n\uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\ub97c \ubd84\uc11d\ud558\uace0 \uc81c\uac70\ud558\ub294 \uc5ed\ud560\uc744 \ud558\ub294\ub370 \uc815\uc801\ubd84\uc11d\uc774 \uae4c\ub2e4\ub86d\uae30 \ub54c\ubb38\uc5d0  \\n\ubc88\ub4e4\ub7ec\uc5d0 \ub530\ub77c \uc54c\uace0\ub9ac\uc998 \ubc0f \uc811\uadfc\ubc29\uc2dd\uc774 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \ud070 \ucc28\uc774\uac00 \ub0a0 \uc218\uc788\ub2e4.\\n\\n## \ucc38\uace0\\n\\n- [package.json \ubc88\uc5ed](https://programmingsummaries.tistory.com/385)\\n- [node_modules\ub85c\ubd80\ud130 \uc6b0\ub9ac\ub97c \uad6c\uc6d0\ud574 \uc904 Yarn Berry](https://toss.tech/article/node-modules-and-yarn-berry)\\n- [FECONF 2022 [B4] \ub0b4 import \ubb38\uc774 \uadf8\ub807\uac8c \uc774\uc0c1\ud588\ub098\uc694?](https://www.youtube.com/watch?v=mee1QbvaO10&t=325s)\\n- [FECONF 2022 [B2] \uc77c\ubc31\uac1c \ud328\ud0a4\uc9c0 \ubaa8\ub178\ub808\ud3ec \uc6b0\uc544\ud558\uac8c \uc6b4\uc601\ud558\uae30](https://www.youtube.com/watch?v=Ix9gxqKOatY&t=114s)\\n- [FEConf 2023 [B4] React Native, Metro\ub97c \ub118\uc5b4\uc11c](https://www.youtube.com/watch?v=QfU5REp8sjQ&t=1253s)\\n- [\ud1a0\uc2a4\u3163SLASH 22 - \uc783\uc5b4\ubc84\ub9b0 \uac1c\ubc1c\uc790\uc758 \uc2dc\uac04\uc744 \ucc3e\uc544\uc11c: \ub9e4\uc77c \ud558\ub8e8\ub97c \uc544\ub07c\ub294 DevOps \uc774\uc57c\uae30](https://www.youtube.com/watch?v=2IE68SDTYvI&list=PL1DJtS1Hv1PiGXmgruP1_gM2TSvQiOsFL&index=32)\\n- [\ud1a0\uc2a4\u3163SLASH 22 - \uc783\uc5b4\ubc84\ub9b0 \uc720\uc800\uc758 \uc2dc\uac04\uc744 \ucc3e\uc544\uc11c : 100\ub144\uc744 \uc544\uaef4\uc900 SSR \uc774\uc57c\uae30](https://www.youtube.com/watch?v=IKyA8BKxpXc)\\n- [JavaScript \ubc88\ub4e4\ub7ec\uc758 \uc774\ud574](https://medium.com/naver-place-dev/javascript-%EB%B2%88%EB%93%A4%EB%9F%AC%EC%9D%98-%EC%9D%B4%ED%95%B4-1-javascript-%EB%AA%A8%EB%93%88-d68c7e438fcd)\\n- [Git \ub0b4\ubd80 \ub3d9\uc791 \ud30c\ud5e4\uce58\uae30](https://tech.wonderwall.kr/articles/git/)"},{"id":"docusaurus-plugin","metadata":{"permalink":"/blog/docusaurus-plugin","editUrl":"https://github.com/WanderedToLa/wanderedtola.blog/tree/master/blog/2024-07-01-docusaurus-plugin/index.md","source":"@site/blog/2024-07-01-docusaurus-plugin/index.md","title":"docusaurus custom plugin \ub9cc\ub4e4\uae30","description":"Recent Posts","date":"2024-07-01T00:00:00.000Z","formattedDate":"July 1, 2024","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"plugin","permalink":"/blog/tags/plugin"},{"label":"custom","permalink":"/blog/tags/custom"}],"readingTime":4.865,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"docusaurus-plugin","title":"docusaurus custom plugin \ub9cc\ub4e4\uae30","authors":["WanderedToLa"],"tags":["docusaurus","plugin","custom"]},"unlisted":false,"prevItem":{"title":"\uc548\uc804\ud55c \uc11c\ube44\uc2a4\ub97c\uc704\ud55c \ud658\uacbd\uad6c\uc131 in frontend","permalink":"/blog/frontend-environment"},"nextItem":{"title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","permalink":"/blog/frontend-observability"}},"content":"## Recent Posts\\n\\n\uba54\uc778\ud398\uc774\uc9c0\uc5d0 recentpost \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub824\uace0 \ubbf8\ub8e8\ub2e4\uac00 \ub4dc\ub514\uc5b4 \uc2dc\uc791\ud558\uba70  \\ndocusaurus\uc5d0\uc11c \uc9c1\uc811 \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc5d0 \uc811\uadfc\ud558\ub824\uace0 \uba87\ubc88\uc744 \uc0bd\uc9c8\ud558\ub2e4\uac00  \\nplugin\uc744 \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4\ub294 \uacb0\ub860\uc744 \uc5bb\uc5c8\ub2e4.  \\n\uc774\ubbf8 \ub9cc\ub4e4\uc5b4\uc9c4 blog \uad00\ub828 plugin\uc774 \uc788\uae34\ud588\uc9c0\ub9cc [plugin-content-blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog)  \\nconfig \ud544\ub4dc\uc5d0\uc11c option\uc744\ud1b5\ud574 \uc218\uc815\ud558\ub294 \ubc29\uc2dd\uc740 \uc6d0\ud558\ub358 \ubaa8\uc591\uc774 \uc544\ub2c8\ub77c \ud328\uc2a4\ud588\uc74c.\\n\\n## Architecture\\n\\nArchive\ud0ed\uc5d0 \uc788\ub294 \uae00 \uc911 \ucd5c\uc2e0\uc21c\uc73c\ub85c 5\uac1c\ub9cc \uba54\uc778\ud398\uc774\uc9c0\uc5d0 \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\uc5c8\ub294\ub370  \\n\uba54\uc778\ud398\uc774\uc9c0\uc5d0\uc11c \ube44\ub3d9\uae30\ub85c \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc744 \ud638\ucd9c\ud574 \uc77d\uc740\ub2e4\uc74c slug\ub97c \ub9ac\ud134\ud558\ub294 \uc2dd\uc73c\ub85c  \\n\uad6c\uc0c1\ud588\uc9c0\ub9cc docusaurus\uc758 \uc81c\uc791\uc758\ub3c4\ub791\uc740 \uc804\ud600 \ub2e4\ub974\uae30\ub54c\ubb38\uc5d0 \uc5d0\ub7ec\uac00 \uc0dd\uae38 \uc218 \ubc16\uc5d0\uc5c6\ub2e4.  \\n\uce5c\uc808\ud558\uac8c\ub3c4 \uc544\ud0a4\ud14d\ucc98 \uc18c\uac1c\uae00\uc744 \ubcf4\uba70 \uac10\uc744 \uc7a1\uc744\uc218 \uc788\uc5c8\uc74c\\n\\ndocusaurus\uc758 \uc124\uacc4 \ud639\uc740 \uba58\ud0c8\ubaa8\ub378\uc774 \ucf54\ub4dc\ub97c \uc9c1\uc811 import\ud574\uc11c \uc4f0\uac70\ub098 \ud558\uc9c0\uc54a\uace0  \\njson\uc73c\ub85c \uc784\uc2dc\ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \ub370\uc774\ud130\ub97c \uc8fc\uace0\ubc1b\uac70\ub098 \uc0ac\uc6a9\uc790\uac00 plugin\uc5d0 \uc811\uadfc\ud55c\ub2e4\uba74  \\n\uc624\ub85c\uc9c0 config.js\ub97c \ud1b5\ud574 \uc0c1\ud638\uc791\uc6a9 \ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5b4 \uc788\uae30\ub54c\ubb38\uc5d0  \\n\uc5ec\uae30\uc11c \uc81c\uacf5\ud558\ub294 Lifecycle API\ub97c \uc774\uc6a9\ud574 build\uc2dc \uc0dd\uc131\ub41c json \ud30c\uc77c\ub85c  \\n\ub0b4 \ube14\ub85c\uadf8 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud574\uc57c \ud55c\ub2e4. \ub530\ub77c\uc11c \ub300\ubd80\ubd84\uc758 \ucee4\uc2a4\ud140\uc740 config\uc5d0\uc11c \uac00\ub2a5\ud568\\n\\n![Architecture](../../static/img/docusaurus-architecture.png)\\n\\n\uadf8\ub798\uc11c \ubb38\uc11c\ub97c \ucc3e\uc544\ubcf4\ub358\uc911 globalData\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 `useGlobalData` API\uac00  \\n\uc788\uae34\ud588\uc73c\ub098 docs\uc758 \uc815\ubcf4\ub9cc \ub2f4\uc544\uc904 \ubfd0 blog\uc758 \ub370\uc774\ud130\ub294 \ub2f4\uae30\uc9c0 \uc54a\uae38\ub798 Lifecycle API\ub97c \uc774\uc6a9\ud574  \\nbuild\uc2dc json\uc5d0 \ube14\ub85c\uadf8 \uc815\ubcf4\ub4e4\uc744 \ub2f4\uc544 \uc0ac\uc6a9\ud558\ub294 \ucabd\uc73c\ub85c \ubcc0\uacbd\ud588\ub2e4.  \\nglobalData\uc758 \uc815\ubcf4\ub4e4\uc740 `npm start`\uc2dc `.docusaurus/globalData.json`\uc5d0\uc11c \ud655\uc778\uac00\ub2a5\\n\\n- [useGlobalData](https://docusaurus.io/docs/docusaurus-core#useGlobalData)\\n\\n## Using Plugins\\n\\nplugin\uc740 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uc124\uce58\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \ub85c\uceec\ud30c\uc77c\uc744 \ubd88\ub7ec\uc640 \uc0ac\uc6a9\uac00\ub2a5\ud568\\n\\n```ts title=\\"docusaurus.config.js\\"\\nexport default {\\n  // ...\\n  plugins: [\'./src/plugins/docusaurus-local-plugin\'],\\n};\\n```\\n\\n\ub85c\uceec\ud30c\uc77c\uc744 \ubd88\ub7ec\uc640 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc808\ub300\uacbd\ub85c\ub85c \uba85\uc2dc\ud55c\ub2e4.\\n\\n```ts title=\\"docusaurus.config.js\\"\\nexport default {\\n  // ...\\n  plugins: [\\n    async function myPlugin(context, options) {\\n      // ...\\n      return {\\n        name: \'my-plugin\',\\n        async loadContent() {\\n          // ...\\n        },\\n        async contentLoaded({ content, actions }) {\\n          // ...\\n        },\\n        /* other lifecycle API */\\n      };\\n    },\\n  ],\\n};\\n```\\n\\n\uc9c1\uc811 \ud568\uc218\ub97c \uc791\uc131\ud558\ub294 \ubc29\ubc95\ub3c4 \uac00\ub2a5\\n\\n\uc704\uc640\uac19\uc774 \uacbd\ub85c\ub97c \uc9c0\uc815\ud588\ub2e4\uba74 Docusaurus\uce21\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Lifecycle APIs\ub97c  \\n\uc774\uc6a9\ud574 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uba74 \ub41c\ub2e4.\\n\\n- [Lifecycle APIs](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis)\\n\\nAPI\ub4e4\uc911 \uac00\uc7a5 \uc911\uc694\ud558\ub2e4\uace0 \ubcfc \uc218 \uc788\ub294 `async loadContent()`\uc640  \\n`async contentLoaded({content, actions})` \ub450 \uac00\uc9c0\uac00 \uc788\ub2e4 `loadContent`\uc5d0\uc11c \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc5d0  \\n\uc811\uadfc\ud558\uac70\ub098 \ub2e4\uc591\ud55c \ub3d9\uc791\ub4e4\uc774 \uac00\ub2a5\ud558\uace0 `loadContent`\uc5d0\uc11c \ub0b4\uac00 \ud544\uc694\ud55c \uac12\uc744 return\ud55c\ub2e4\uba74  \\n\uadf8 \uac12\uc740`contentLoaded`\ud568\uc218\uc5d0\uc11c `content` \ud30c\ub77c\ubbf8\ud130\ub85c \ubc1b\ub294\ub2e4. `actions`\uc758 \uacbd\uc6b0  \\n\uae30\ubcf8\uc73c\ub85c \uc81c\uacf5\ud558\ub294 3\uac00\uc9c0 \ud568\uc218\ub4e4\uc774 \uc788\uace0 \uacbd\ub85c\ub97c \uc124\uc815\ud558\ub294 \uacbd\uc6b0 `appRoute`  \\njson\ud30c\uc77c\uc744 \ub9cc\ub4e0\ub2e4\uba74 `createData` \ub098\uc758 \uacbd\uc6b0 \uae30\uc874 globalData.json\uc5d0 \ub370\uc774\ud130\ub97c\\n\ucd94\uac00\ud558\ub824\uace0 \ud588\uae30\uc5d0 \ub9c8\uc9c0\ub9c9\uc778 `setGlobalData`\ub97c \uc0ac\uc6a9\ud588\ub2e4.\\n\\n- loadContent - \ub2e4\uc591\ud55c \ub3d9\uc791\uc744 \uc815\uc758\ud558\ub294 \ud568\uc218 (\ud30c\uc77c\uc2dc\uc2a4\ud15c, API\ud638\ucd9c...)\\n- contentLoaded - content,actions\ub97c \ud30c\ub77c\ubbf8\ud130\ub85c \ubc1b\ub294 \ud568\uc218\\n  - content: loadCotent\uc758 \ub9ac\ud134\uac12\\n  - actions: appRoute, createData, setGlobalData\ub85c \uad6c\uc131\\n\\n```ts title=\\"./src/plugins/my-plugin.js\\"\\nexport default {\\n  plugins: [\\n    async function myPlugin(context, options) {\\n      return {\\n        name: \'my-plugin\',\\n        async loadContent() {\\n          return 1;\\n        },\\n\\n        // loadContent\uc758 return\uac12 content\uc5d0 \uc804\ub2ec\\n        async contentLoaded({ content, actions }) {\\n          const { setGlobalData } = actions;\\n          setGlobalData({ myBlogData: content });\\n        },\\n      };\\n    },\\n  ],\\n};\\n```\\n\\n\uc704\ucc98\ub7fc \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uba74 `npm start`\uc2dc globalData\uc5d0 \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub418\uace0  \\n\ub0b4\uac00 \uc6d0\ud558\ub294 \ubd80\ubd84\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub824\uba74 `useGlobalData` \ubc0f `usePluginData`\ub97c \uc0ac\uc6a9\ud574  \\n\ub370\uc774\ud130\ub97c \uac00\uc838\uc640 \uc0ac\uc6a9\ud558\uba74 \ub05d\\n\\n```tsx title=\\"./src/pages/index.tsx\\"\\nimport { usePluginData } from \'@docusaurus/useGlobalData\';\\n\\nexport default function Home() {\\n  const { myBlogData } = usePluginData(\'my-plugin\');\\n\\n  return (\\n    <ul className=\\"post-list-container\\">\\n      {myBlogData?.map((post) => (\\n        <li key={post.slug}>\\n          <Link to={`/blog/${post.slug}`}>{post.title}</Link>\\n          {post.date}\\n        </li>\\n      ))}\\n    </ul>\\n  );\\n}\\n```"},{"id":"frontend-observability","metadata":{"permalink":"/blog/frontend-observability","editUrl":"https://github.com/WanderedToLa/wanderedtola.blog/tree/master/blog/2024-06-22-Observability/index.md","source":"@site/blog/2024-06-22-Observability/index.md","title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","description":"SSR(Server-Side Rendering) \ub3c4\uc785\uc758 \ubcc0\ud654","date":"2024-06-22T00:00:00.000Z","formattedDate":"June 22, 2024","tags":[{"label":"Observability","permalink":"/blog/tags/observability"},{"label":"Frontend","permalink":"/blog/tags/frontend"}],"readingTime":5.355,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"frontend-observability","title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","authors":["WanderedToLa"],"tags":["Observability","Frontend"]},"unlisted":false,"prevItem":{"title":"docusaurus custom plugin \ub9cc\ub4e4\uae30","permalink":"/blog/docusaurus-plugin"}},"content":"## SSR(Server-Side Rendering) \ub3c4\uc785\uc758 \ubcc0\ud654\\n\\n\uc5ec\ub7ec\uae30\uc5c5\ub4e4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub354 \ub098\uc740 \uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\ub2e4.  \\nFrontend \uce21\uba74\uc5d0\uc11c \uc5b4\ub5a4 \ub178\ub825\ub4e4\uc744 \ud558\uace0\uc788\uc744\uae4c \ucc3e\uc544\ubcf4\uc558\ub294\ub370  \\n\uccab\ubc88\uc9f8\ub294 Node.js \uc758 \ubc1c\uc804\uc73c\ub85c server\uc640 client\uac00 \uac19\uc740 \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74\uc11c  \\n\ub80c\ub354\ub9c1\uc758 \ucc45\uc784\uc744 Server\ub85c \uc774\uc804\ud558\ub824\ub294 \uc6c0\uc9c1\uc784\uc774 \ub098\ud0c0\ub0ac\uace0  \\n\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c \ub80c\ub354\ub9c1\uc744 \ub2f4\ub2f9\ud558\ub358 React\uc640 \uac19\uc740 \ud658\uacbd\uc5d0\uc11c  \\n\uc0ac\uc6a9\uc790\ub4e4\uc774 \ud398\uc774\uc9c0\uc5d0 \ucc98\uc74c\uc73c\ub85c \uc9c4\uc785\ud558\ub294 \uc2dc\uac04`(LCP/FCP)`\uc744 \uc904\uc5ec \ub354 \ub098\uc740 \uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud55c \uac83\uc774\ub2e4.\\n\\n\uc774\ub7f0 \ub300\ud45c\uc801\uc778 \ud504\ub808\uc784\uc6cc\ud06c\ub85c Next.js\uac00 \uc788\uace0 \ub2e8\uc810\uc740  \\nServer\uce21\uc5d0\uc11c \ub80c\ub354\ub9c1 \ud55c\ub2e4\ub294 \uac83\uc740 \uacb0\uad6d \uad00\ub9ac\ud574\uc57c\ud558\ub294 \uc11c\ubc84\uac00 \uc788\ub2e4\ub294 \uac83\uc774\uace0 \uace7  \\n\ubaa8\ub2c8\ud130\ub9c1 \ud558\ub294\ub370 \ube44\uc6a9\uc774 \ub4e4\uace0 \ud2b8\ub798\ud53d\uc774 \ubab0\ub9b4 \uacbd\uc6b0\ub97c \ub300\ube44\ud574\uc57c\ud55c\ub2e4.  \\n\ub610\ud55c Build \ubc0f \ubc30\ud3ec\uc2dc\uac04\uc774 \uc624\ub798\uac78\ub9b0\ub2e4\ub294 \ub2e8\uc810\ub3c4 \uc874\uc7ac.\\n\\n## Observability?\\n\\n\ucee8\ud37c\ub7f0\uc2a4\ub098 \uc790\ub8cc\ub4e4\uc744 \ucc3e\ub2e4\ubcf4\uba74 `Observability`\ub77c\ub294 \ub2e8\uc5b4\ub97c \uc2ec\uc2ec\uce58 \uc54a\uac8c \ubcfc \uc218 \uc788\ub2e4.  \\n\ub3c4\ub300\uccb4 \ubb34\uc2a8 \ub73b\uc77c\uae4c \ubcf4\ub2e4\ubcf4\ub2c8 \ub098\uc5d0\uac8c\ub294 \uc774\uc0c1\uc801\uc73c\ub85c \ub2e4\uac00\uc654\ub294\ub370  \\n\uc774 \ub2e8\uc5b4\ub97c \ub9cc\ub4e0 \uc0ac\ub78c `Rudolf E Kalman`\uc740 \\"\uc2dc\uc2a4\ud15c\uc758 \ucd9c\ub825\uc73c\ub85c\ubd80\ud130 \uc2dc\uc2a4\ud15c\uc758 \uc0c1\ud0dc\ub97c \uc774\ud574\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\\"\\n\uc774\ub77c\uace0 \ud55c\ub2e4 \uacb0\uad6d \uc774 \ub9d0\uc774 \ub85c\uae45\uc774\ub098 \ubaa8\ub2c8\ud130\ub9c1 \uc9c0\ud45c\ub97c \ud1b5\ud574 \uc6b0\ub9ac\uc758 App\uc758 \uc0c1\ud0dc\ub97c \uce21\uc815\ud558\uace0  \\n\ubc1c \ube60\ub978 \ub300\uc751\uc774 \uac00\ub2a5\ud55c \ub2a5\ub825\uc774\ub77c\uace0 \uc0dd\uac01\ud55c\ub2e4.\\n\\n\ud2b9\ud788\ub098 \uaddc\ubaa8\uac00 \ud070 \uae30\uc5c5\ub4e4\uc740 MSA\uac19\uc740 \uc544\ud0a4\ud14d\ucc98\ub97c \uc0ac\uc6a9\ud558\uace0 \uc694\uccad\uc774 \ubd84\uc0b0\ucc98\ub9ac\ub418\uc5b4  \\n\uc81c\ub300\ub85c \ub85c\uadf8\ub97c \ud655\uc778\ud558\uac70\ub098 \ubaa8\ub2c8\ud130\ub9c1\uc774 \ud798\ub4e4 \uc218 \uc788\ub2e4.  \\n\uc774\uc0c1\uc801\uc73c\ub85c\ub294 \uc5d0\ub7ec\uac00 \uc544\uc608\uc5c6\ub294 \ud658\uacbd\uc744 \uafc8\uafb8\uae34 \ud558\uaca0\uc9c0\ub9cc \uc5d0\ub7ec\ub294 \uc788\uc744 \uc218 \ubc16\uc5d0 \uc5c6\uace0  \\n\uadf8\ub807\uae30\uc5d0 \ubc1c\ube60\ub978 \ub300\uc751\uc744 \uc704\ud574 \ucd5c\ub300\ud55c `Observability`\ub97c \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574 \ud798\uc4f0\ub294\uac83 \uac19\ub2e4.\\n\\n## Web Vitals\\n\\n\ub300\ud45c\uc801\uc73c\ub85c \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \uc131\ub2a5\uc744 \uce21\uc815\ud560 \ub54c \uc2e0\uacbd \uc4f0\ub294 4\uac00\uc9c0\ub294\\n\\n- TTFB: \ube0c\ub77c\uc6b0\uc800\uac00 \uc11c\ubc84\ub85c\ubd80\ud130 \uccab\ubc88\uc9f8 \ubc14\uc774\ud2b8\ub97c \uc218\uc2e0\ud558\ub294 \uc18d\ub3c4(>500ms)\\n- LCP: \uac00\uc7a5 \ud070 \ucf58\ud150\uce20\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uadf8\ub824\uc9c0\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>2.5s)\\n- FCP: \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcfc \uc218 \uc788\ub294 \ucf58\ud150\uce20\uac00 \ucd5c\ucd08\ub85c \uadf8\ub824\uc9c0\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>1.8s)\\n- TTI: \ud398\uc774\uc9c0 \ub85c\ub529\uc774 \uc644\ub8cc\ub418\uace0 \uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc751\ub2f5\ud558\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>100ms)\\n\\n\uc774 \uc678\uc5d0\ub3c4 \ub808\uc774\uc544\uc6c3 \uc2dc\ud504\ud2b8(CLS)\ub098 TTI\uc640 \uc720\uc0ac\ud55c FID\ub4f1\uc774 \uc788\ub2e4.\\n\\n\uc774\ub7f0 \uc9c0\ud45c\ub4e4\uc758 \uc790\uc138\ud55c \uc124\uba85\uc774\uc544\ub2cc \uc774\uc720\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574\ubcf4\ub824 \ud558\ub294\ub370  \\n\uc704\uc640\uac19\uc740 \uc9c0\ud45c\ub4e4\uc744 \ud1b5\ud574 \uc131\ub2a5\uc744 \uce21\uc815/\ucd5c\uc801\ud654 \ud558\ub294 \uac83\uc740 \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uac1c\uc120\uc73c\ub85c \uc774\uc5b4\uc9c0\uace0  \\n\uafb8\uc900\ud55c \ubaa8\ub2c8\ud130\ub9c1\uc744 \ud1b5\ud574 \uc131\ub2a5\uc758 \uc800\ud558\ub97c \ub9c9\ub294\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4 \ud639\uc740 \ud14c\uc2a4\ud2b8\ucf54\ub4dc \uc791\uc131\uc744 \ud1b5\ud574 \ub9c9\uac70\ub098?\\n\\n## \uc815\ub9ac\\n\\n\ub204\uad70\uac00 \ub098\uc5d0\uac8c \uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780 \ubb50\uc5d0\uc694? \ub77c\uace0 \ubb3b\ub294\ub2e4\uba74  \\nFrontend\uc758 Observability\ub97c \uac00\ub2a5\ud55c \ucd5c\ub300\ub85c \ub04c\uc5b4\uc62c\ub9ac\ub294 \uac83\uacfc Metric\uac19\uc740 \ubcf4\uc870\uc9c0\ud45c\ub97c \ud65c\uc6a9\ud558\uc5ec  \\nApp\uc758 \uc131\ub2a5\uc744 \uce21\uc815\ud558\uace0 \ucd5c\uc801\ud654,\uc815\ud655\uc131\uc744 \ud14c\uc2a4\ud2b8\ud558\uc5ec \uc6f9\uc0ac\uc774\ud2b8\uc758 \ub2e4\uc591\ud55c \uce21\uba74\ub4e4\uc744 \uc6d0\ud65c\ud558\uac8c  \\n\ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uac1c\uc120\ud558\uace0 \uc5d0\ub7ec\ub97c \uac10\uc9c0\ud558\uc5ec \uc2e0\uc18d\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd\uc744 \uad6c\uc131\ud558\ub294 \uac83\\n\uc774\uc0c1\uc801\uc73c\ub85c\ub294 \uc5d0\ub7ec\uac00 \uc544\uc608\uc5c6\ub294 \ud658\uacbd\uc774 \uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\uc5d0 \uadfc\uc811\ud558\uc9c0 \uc54a\uc744\uae4c \ub77c\uace0 \ub300\ub2f5\ud560\uac83\uac19\ub2e4.\\n\\n### \ucc38\uace0\\n\\n- [SSR\uc758 \uae30\uc068\uacfc \uc2ac\ud514: \ub80c\ub354\ub9c1\uc758 \ubcc0\ud654\uc758 \ud750\ub984\uc744 \ud1b5\ud574 \uc54c\uc544\ubcf4\ub294 SSR\uacfc Streaming SSR | \uc778\ud504\ucf582023](https://www.youtube.com/watch?v=hPyyFu3lrEg&list=PLpkj8RKr48waFtrqvJjbNrpGCvdxyX8Nx&index=30)\\n- [[Dev Dive\\\\_ Frontend Day] \uc2a4\ud2b8\ub9ac\ubc0d SSR \ub525 \ub2e4\uc774\ube0c](https://www.youtube.com/watch?v=9xl9X2pfHeI&t=1934s)\\n- [\ud1a0\uc2a4\u3163SLASH 23 - \ubd84\uc0b0 \ucd94\uc801 \uccb4\uacc4 & \ub85c\uadf8 \uc911\uc2ec\uc73c\ub85c Observability \ud655\ubcf4\ud558\uae30](https://www.youtube.com/watch?v=Ifz0LsfAG94&list=PL1DJtS1Hv1PiGXmgruP1_gM2TSvQiOsFL&index=23)\\n- [\ud1a0\uc2a4\u3163SLASH 22 - \uc783\uc5b4\ubc84\ub9b0 \uac1c\ubc1c\uc790\uc758 \uc2dc\uac04\uc744 \ucc3e\uc544\uc11c: \ub9e4\uc77c \ud558\ub8e8\ub97c \uc544\ub07c\ub294 DevOps \uc774\uc57c\uae30](https://www.youtube.com/watch?v=2IE68SDTYvI)"}]}')}}]);