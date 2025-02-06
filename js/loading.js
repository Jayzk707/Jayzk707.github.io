document.addEventListener("DOMContentLoaded", function () { 
    // 显示加载背景
    document.querySelector(".loading-background").classList.remove("hide");

    // 在页面完全加载完成后隐藏加载背景
    window.addEventListener("load", function () {
        // 设置淡化效果
        document.querySelector(".loading-background").style.opacity = "0";

        // 延迟500ms后隐藏整个loading屏幕
        setTimeout(() => {
            document.querySelector(".loading-screen").classList.add("hide");
        }, 500);  // 延迟500ms后隐藏，确保动画平滑过渡
    });
});

