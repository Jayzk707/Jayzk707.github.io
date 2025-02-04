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
        }, 300);  // 延迟500ms后隐藏，确保动画平滑过渡
    });
});

// 页面加载时的进度条逻辑
document.addEventListener("DOMContentLoaded", function () {
    // 配置进度条
    topbar.config({
        barThickness: 5, // 进度条的高度
        barColors: { 
            "0": "rgba(0, 149, 234, 0.8)",  // 进度条开始时的颜色
            "1.0": "rgba(0, 255, 0, 0.8)" // 进度条结束时的颜色
        },
        shadowBlur: 10, // 进度条的阴影模糊程度
        shadowColor: "rgba(0, 0, 0, 0.5)" // 进度条的阴影颜色
    });

    // 页面加载时显示进度条
    requestAnimationFrame(() => topbar.show());

    // 页面加载完成后隐藏进度条
    window.addEventListener("load", function () {
        setTimeout(() => topbar.hide(), 300); // 延迟500ms隐藏
    });
});
