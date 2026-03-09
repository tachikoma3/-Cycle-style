// DOMの構築完了後に処理を開始
document.addEventListener("DOMContentLoaded", () => {

  // モーダル関連要素の取得
  const modal = document.getElementById("sharedModal");      // モーダル全体ラッパー
  const overlay = document.querySelector(".modal-overlay"); // 背景オーバーレイ
  const modalContent = document.querySelector(".modal-content"); // 拡大表示コンテンツ
  const closeBtn = document.querySelector(".close-btn");    // 閉じるボタン

  // クリックされた元画像の位置・サイズ情報を保持
  let originalRect = null;

  // モーダルを開く対象要素すべてにクリックイベントを付与
  document.querySelectorAll(".open-modal").forEach(img => {

    img.addEventListener("click", () => {

      // クリックされた画像の現在位置とサイズを取得（アニメーション起点）
      originalRect = img.getBoundingClientRect();

      // モーダル内画像を差し替え
      modalImage.src = img.src;

      // モーダルを表示状態へ
      modal.classList.add("is-active");
      document.body.classList.add("modal-open"); // 背景スクロール防止用

      // 画像読み込み完了後にアニメーション開始
      modalImage.onload = () => {

        // モーダルを「元画像と同じ位置・サイズ」にセット
        // gsap.set(modalContent, {
        //   top: originalRect.top,
        //   left: originalRect.left,
        //   width: originalRect.width,
        //   height: originalRect.height,
        //   xPercent: 0,
        //   yPercent: 0
        // });

        // オーバーレイをフェードイン
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.4
        });

        // モーダルを画面中央へ拡大移動（width/heightはautoへ戻す）
        gsap.to(modalContent, {
          top: window.innerHeight / 2,
          left: window.innerWidth / 2,
          clearProps: "width,height", // 固定サイズ解除
          xPercent: -50,
          yPercent: -50,
          duration: 0.6,
          ease: "power3.out"
        });

        // 閉じるボタンを少し遅らせて表示
        gsap.to(closeBtn, {
          opacity: 1,
          duration: 0.3,
          delay: 0.3
        });

      };

    });

  });

  // モーダルを閉じる処理
  function closeModal() {

    // 起点情報がなければ処理しない
    if (!originalRect) return;

    // 閉じるボタンを先にフェードアウト
    gsap.to(closeBtn, { opacity: 0, duration: 0.2 });

    // モーダルを元の画像位置・サイズへ戻す
    gsap.to(modalContent, {
      top: originalRect.top,
      left: originalRect.left,
      width: originalRect.width,
      height: originalRect.height,
      xPercent: 0,
      yPercent: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        // アニメーション完了後に状態リセット
        modal.classList.remove("is-active");
        document.body.classList.remove("modal-open");
        modalContent.src = "";  // 画像クリア
        originalRect = null;    // 起点情報リセット
      }
    });

    // オーバーレイをフェードアウト
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.4
    });
  }

  // 閉じるトリガー設定
  overlay.addEventListener("click", closeModal);     // 背景クリック
  closeBtn.addEventListener("click", closeModal);    // 閉じるボタン
  modalContent.addEventListener("click", closeModal); // モーダル本体クリック

});