!function(e,t){if("function"==typeof define&&define.amd)define("Waline",["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var n={exports:{}};t(n.exports),e.Waline=n.exports}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.version=e.pageviewCount=e.init=e.defaultLocales=e.commentCount=e.RecentComments=void 0;const t=["nick","mail","link"],n=e=>e.filter((e=>t.includes(e))),o="zh-CN",r=e=>new Promise(((t,n)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=()=>{var e;return t((null===(e=o.result)||void 0===e?void 0:e.toString())||"")},o.onerror=n})),l=e=>!0===e?'<p class="wl-tex">Tex is not available in preview</p>':'<span class="wl-tex">Tex is not available in preview</span>',i=new RegExp("(".concat(/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source,"|").concat(/</.source,")|((?:").concat(/(?:^|\s)\/\/(.+?)$/gm.source,")|(?:").concat(/\/\*([\S\s]*?)\*\//gm.source,"))"),"gmi"),s=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],u={},a=e=>{let t=0;return e.replace(i,((e,n,o)=>{if(o)return'<span style="color: slategray">'.concat(o,"</span>");if("<"===n)return"&lt;";let r;u[n]?r=u[n]:(r=s[t],u[n]=r);const l='<span style="color: #'.concat(r,'">').concat(n,"</span>");return t=++t%s.length,l}))},c=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder"],p=e=>Object.fromEntries(e.map(((e,t)=>[c[t],e])));var d=p(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words","Please input comments between $0 and $1 words!\n Current word number: $2","Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF"]),h=p(["ニックネーム","3バイト以上のニックネームをご入力ください.","メールアドレス","メールアドレスをご確認ください.","サイト","オプション","ここにコメント","コメントしましょう~","提出する","Like","Cancel like","返信する","キャンセル","コメント","更新","さらに読み込む","プレビュー","絵文字","画像をアップロード","秒前","分前","時間前","日前","たっだ今","アップロード","ログインする","ログアウト","管理者","トップに置く","ワード","コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2","匿名","うえにん","なかにん","しもおし","特にしもおし","かげ","なぬし","GIF","探す GIF"]),f=p(["昵称","昵称不能少于3个字符","邮箱","请填写正确的邮件地址","网址","可选","欢迎评论","来发评论吧~","提交","喜欢","取消喜欢","回复","取消回复","评论","刷新","加载更多...","预览","表情","上传图片","秒前","分钟前","小时前","天前","刚刚","正在上传","登录","退出","博主","置顶","字","评论字数应在 $0 到 $1 字之间！\n当前字数：$2","匿名","潜水","冒泡","吐槽","活跃","话痨","传说","表情包","搜索表情包"]),g=p(["暱稱","郵箱","網址","可選","暱稱不能少於3個字元","請填寫正確的郵件地址","歡迎評論","來發評論吧~","提交","喜歡","取消喜歡","回覆","取消回覆","評論","刷新","載入更多...","預覽","表情","上傳圖片","秒前","分鐘前","小時前","天前","剛剛","正在上傳","登錄","退出","博主","置頂","字","評論字數應在 $0 到 $1 字之間！\n當前字數：$2","匿名","潛水","冒泡","吐槽","活躍","話癆","傳說","表情包","搜索表情包"]),m=p(["Apelido","Apelido não pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endereço de e-mail.","Website","Opcional","Comente aqui...","Nenhum comentário, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Comentários","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atrás","minutos atrás","horas atrás","dias atrás","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras","Favor enviar comentário com $0 a $1 palavras!\n Número de palavras atuais: $2","Anônimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF"]),v=p(["Псевдоним","Никнейм не может быть меньше 3 байт.","Эл. адрес","Пожалуйста, подтвердите адрес вашей электронной почты.","Веб-сайт","Необязательный","Комментарий здесь...","Пока нет комментариев.","Отправить","Like","Cancel like","Отвечать","Отменить ответ","Комментарии","Обновить","Загрузи больше...","Превью","эмодзи","Загрузить изображение","секунд назад","несколько минут назад","несколько часов назад","дней назад","прямо сейчас","Загрузка","Авторизоваться","Выход из системы","Админ","Липкий","Слова","Пожалуйста, введите комментарии от $0 до $1 слов!\nНомер текущего слова: $2","Анонимный","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Поиск GIF"]);const y={zh:f,"zh-cn":f,"zh-CN":f,"zh-tw":g,"zh-TW":g,en:d,"en-US":d,"en-us":d,jp:h,"jp-jp":h,"jp-JP":h,"pt-br":m,"pt-BR":m,ru:v,"ru-ru":v,"ru-RU":v};function w(e,t){const n=Object.create(null),o=e.split(",");for(let e=0;e<o.length;e++)n[o[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}e.defaultLocales=y;const k=w("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function b(e){return!!e||""===e}function A(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Z(o)?C(o):A(o);if(r)for(const e in r)t[e]=r[e]}return t}return Z(e)||J(e)?e:void 0}const x=/;(?