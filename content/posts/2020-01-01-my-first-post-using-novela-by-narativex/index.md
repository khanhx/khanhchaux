---
title: Front-End Developer thì cần cài những gì - MacOS
author: Khánh Châu
date: 2020-02-11
excerpt: Năm 2021 rồi, nếu bạn vừa chuyển nhà sang MacOS thì đây là những step
  khuyên dùng để tối hưu môi trường làm việc của bạn
hero: images/article-image-1.jpg
---
Từ khi chuyển nhà sang MacOS mình đã thực sự phát cuồng vì sự tiện dụng mà nó mang lại. Sẽ không ngoa khi nói nó được sinh ra để dành cho developer 😎. Chính vì lẽ đó mình đã luôn take note lại các step/application đã và đang sử dụng để đề phòng backup/reinstall lại sau này. 

Hôm nay nhân tiện vừa dọn nhà đón tết xong thì mới có chút thời gian để viết lại một bài hoàn chỉnh như này. Các application/package được mình recommend đều xếp theo thứ tự từ trên xuống dưới. Tuỳ vào nhu cầu cụ thể, hi vọng sẽ giúp được mọi người làm quen và setup lại môi trường một cách nhanh chóng hơn (hoặc đơn giản chỉ là một bài note cho chính mình 🤪)   

## 1. Homebrew và những người bạn

Trang chủ: [Homebrew](https://brew.sh/)

Cài đặt:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Tin mình đi, đây là `Package Manager` cho MacOS tốt nhất ở thời điểm hiện tại. Quên đi việc phải lọ mọ tải file dmg rồi install từng cái một. Quên đi việc phải handle update version cho từng application. Tất cả đã được gói gọn trong duy nhất một mình `Homebrew`.

Sau khi đã có homebrew thì bạn có thể sử dụng nó để install các package sau:

* Trình duyệt: **[Chrome](https://formulae.brew.sh/cask/google-chrome)** 

  ```
  brew install --cask google-chrome
  ```

  Cái này thì quá thông dụng rồi nên chắc mình không cần phải giải thích gì thêm nữa 
* Code Editor: **[Microsoft Visual Studio Code (VS Code)](https://formulae.brew.sh/cask/visual-studio-code)** 

  ```
  brew install --cask visual-studio-code
  ```

  Được ra mắt vào năm 2015, VsCode nhanh chóng trở nên phổ biến vì độ đa dụng và khả năng tuỳ biến cao của nó. Vượt xa những đối thủ lâu đời vươn lên thành code editor thông dụng nhất 2020  
* Terminal: **[iTerm2](https://formulae.brew.sh/cask/iterm2)**

  ```
  brew install --cask iterm2
  ```

  Hãy quên trình terminal mặc định của mac đi. iTerm2 cung cấp các công cụ mạnh mẽ và khả năng tuỳ biến tuyệt vời. Nếu có thời gian mình sẽ làm một bài viết khác chia sẻ các trick mà mình tóm gọn được.

## 2. VSCode và bè lũ extension

Hiện tại mình đang làm việc chủ yếu với javascript nên các extendion dưới đây đã đi theo mình trong một thời gian dài. Các bạn có thể cân nhắc để cài đặt tuỳ theo nhu cầu sử dụng:

* Theme: **[One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)**: 

  Với các fan cuồng Dark Mode như mình thì **[One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)** có thể coi là phổ biến nhất hiện tại với hơn 3 triệu lượt tải trên market place của VSCode
* Icon theme: **[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)**: 

  Tình cờ phát hiện ra em nó trong một lần địa máy của ông anh trong team. Chỉ một thay đổi nhỏ trong icon của các file dựa vào đuôi file nhưng nó sẽ giúp bạn rất nhiều khi làm việc với các dự án lớn. Nhanh chóng phân biệt/khoanh vùng được file mình cần sử dụng.
* Autocomplete AI: **[Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)**: 

  Hàng chính chủ từ Microsoft nên mọi người có thể yên tâm về chất lượng. Nó sẽ hỗ trợ việc suggestion một cách mạnh mẽ hơn rất nhiều so với trình autocomplete mặc định. Hiện nay đã xuất hiện thêm 1 extension mới là **[Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)**  cơ mà nó ngốn ram kinh khủng khiếp cộng thêm trả phí nên cũng chưa được phổ biến.
* Remote editor: **[Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)**: 

  Trong trường hợp bạn cần edit các file trực tiếp trên server thì không nên bỏ qua ext này.  Qua rồi cái thời phải \`ssh\`  vào server rồi nhìn chằm chằm vào cái màn hình nano/vim để sửa từng dòng code. Ext này sẽ giúp bạn connect trực tiếp đến server. Đánh đổi bằng một chút trễ nhưng nó mang lại cảm giác quen thuộc như khi chỉnh sửa các file trên chính máy của bạn
* Source control: **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)**: 

  Nếu dự án của bạn sử dụng Git thay vì svn để quản lý thì đây là 2 ext tuyệt vời hỗ trợ rất nhiều trong quá trình truy tìm cũng như giải thích nguyên nhân của các line code vi diệu. Vì một môi trương làm việc thoải mái nhất, hãy cài sớm 2 ext này để nhanh chóng truy tìm thủ phạm đồng thời tránh đi các pha tự vả vào mặt của mình.