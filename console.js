(() => {
    // Delete other menu if there is
    const old = document.querySelector("#ytb-mod-menu");
    if (old) old.remove();

    // --- Container ---
    const menu = document.createElement("div");
    menu.id = "ytb-mod-menu";
    Object.assign(menu.style, {
        position: "fixed",
        top: "100px",
        left: "100px",
        background: "rgba(25,25,25,0.95)",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.6)",
        fontFamily: "monospace",
        zIndex: 9999999,
        width: "320px",
        userSelect: "none",
        overflow: "hidden"
    });

    // --- Header ---
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "🎬 YT Mod Menu 🎬";
    header.style.cssText = `
        padding:8px; font-weight:bold; color:#FF0000; cursor:move;
        background:#111; border-radius:12px 12px 0 0; text-align:center;
    `;
    menu.appendChild(header);

    // --- Tabs ---
    const tabs = document.createElement("div");
    tabs.className = "tabs";
    tabs.style.cssText = `
        display:flex; justify-content:space-around; background:#222; padding:5px;
    `;
    menu.appendChild(tabs);

    const tabNames = ["main", "env", "fun", "credit"];
    const tabButtons = {};
    tabNames.forEach((name, i) => {
        const btn = document.createElement("button");
        btn.dataset.tab = name;
        btn.textContent =
            name === "env" ? "Environment" : name[0].toUpperCase() + name.slice(1);
        Object.assign(btn.style, {
            flex: "1",
            background: "none",
            border: "none",
            padding: "5px",
            color: "white",
            cursor: "pointer",
            transition: "0.2s"
        });
        if (i === 0) btn.classList.add("active");
        tabs.appendChild(btn);
        tabButtons[name] = btn;
    });

    // --- Content ---
    const content = document.createElement("div");
    content.className = "content";
    content.style.cssText = "padding:10px;";
    menu.appendChild(content);

    // Tab containers
    const tabContainers = {};
    tabNames.forEach((name, i) => {
        const tab = document.createElement("div");
        tab.className = "tab tab-" + name;
        Object.assign(tab.style, {
            display: i === 0 ? "flex" : "none",
            flexDirection: "column",
            gap: "6px"
        });
        content.appendChild(tab);
        tabContainers[name] = tab;
    });

    // --- Main Tab ---
    const btnVideoLink = document.createElement("button");
    btnVideoLink.textContent = "Video's link";
    tabContainers.main.appendChild(btnVideoLink);

    const btnVideoCrtime = document.createElement("button");
    btnVideoCrtime.textContent = "Video's current time";
    tabContainers.main.appendChild(btnVideoCrtime);

    const btnVideoPause = document.createElement("button");
    btnVideoPause.textContent = "Pause";
    tabContainers.main.appendChild(btnVideoPause);

    const btnVideoPlay = document.createElement("button");
    btnVideoPlay.textContent = "Play";
    tabContainers.main.appendChild(btnVideoPlay);
  
    const btnAdBlock = document.createElement("button");
    btnAdBlock.textContent = "Adblock";
    tabContainers.main.appendChild(btnAdBlock);

    // Playback Rate Input (Main tab)
    const rateLabel = document.createElement("label");
    rateLabel.style.cssText = "font-size:12px; margin-top:6px;";
    rateLabel.textContent = "Set playbackRate: ";
    const rateInput = document.createElement("input");
    rateInput.type = "number";
    rateInput.min = "0.25";
    rateInput.max = "5";
    rateInput.step = "0.25";
    rateInput.value = "1";
    Object.assign(rateInput.style, {
        width: "70px",
        background: "#111",
        color: "#0f0",
        border: "1px solid #555",
        borderRadius: "6px",
        padding: "3px",
        marginLeft: "5px"
    });
    rateLabel.appendChild(rateInput);
    tabContainers.main.appendChild(rateLabel);

    const btnResetRate = document.createElement("button");
    btnResetRate.textContent = "Reset playbackRate to 1.0";
    tabContainers.main.appendChild(btnResetRate);

    // --- Environment Tab ---
    const btnEnvMeta = document.createElement("button");
    btnEnvMeta.textContent = "See video's metadata";
    tabContainers.env.appendChild(btnEnvMeta);
    
    const btnEnvView = document.createElement("button");
    btnEnvView.textContent = "Show video's view"
    tabContainers.env.appendChild(btnEnvView)
  
    const btnEnvChannel = document.createElement("button");
    btnEnvChannel.textContent = "Video's channel & avatar"
    tabContainers.env.appendChild(btnEnvChannel)


    // --- Fun Tab ---
    const btnFunInv = document.createElement("button");
    btnFunInv.textContent = "Invert video's color";
    tabContainers.fun.appendChild(btnFunInv);

    const btnFunShakyIcon = document.createElement("button");
    btnFunShakyIcon.textContent = "Shaky Youtube icon";
    tabContainers.fun.appendChild(btnFunShakyIcon);
  
    const btnFunShakyThumbnail = document.createElement("button");
    btnFunShakyThumbnail.textContent = "Shaky Youtube Thumbnail";
    tabContainers.fun.appendChild(btnFunShakyThumbnail);

    const btnFunChangeIcon = document.createElement("button");
    btnFunChangeIcon.textContent = "Change YouTube icon";
    tabContainers.fun.appendChild(btnFunChangeIcon);

    // --- Credit Tab ---
    const creditP1 = document.createElement("p");
    creditP1.style.cssText = "margin:5px 0; font-size:14px;";
    creditP1.textContent = "Made with ❤️ by ";
    const bold = document.createElement("b");
    bold.textContent = "Codeguybutbackrooms";
    creditP1.appendChild(bold);
    tabContainers.credit.appendChild(creditP1);

    const creditP2 = document.createElement("p");
    creditP2.style.cssText = "margin:5px 0; font-size:12px; color:#FF0000;";
    creditP2.textContent = "YT Mod Menu v0.1";
    tabContainers.credit.appendChild(creditP2);

    // --- Apply Button Style ---
    const applyButtonStyle = function(btn) {
        Object.assign(btn.style, {
            padding: "6px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#444",
            color: "white",
            transition: "0.2s"
        });
        btn.addEventListener("mouseover", function() {
            btn.style.background = "#666";
        });
        btn.addEventListener("mouseout", function() {
            btn.style.background = "#444";
        });
    };
    menu.querySelectorAll("button").forEach(applyButtonStyle);

    // --- Tabs Switch ---
    Object.values(tabButtons).forEach(function(btn) {
        btn.addEventListener("click", function() {
            Object.values(tabButtons).forEach(function(b) {
                b.classList.remove("active");
            });
            btn.classList.add("active");

            Object.values(tabContainers).forEach(function(tab) {
                tab.style.display = "none";
            });
            tabContainers[btn.dataset.tab].style.display = "flex";
        });
    });

    // --- Drag ---
    let isDragging = false;
    let offsetX;
    let offsetY;
    header.addEventListener("mousedown", function(e) {
        isDragging = true;
        offsetX = e.clientX - menu.offsetLeft;
        offsetY = e.clientY - menu.offsetTop;
        document.onmousemove = function(ev) {
            if (isDragging) {
                menu.style.left = ev.clientX - offsetX + "px";
                menu.style.top = ev.clientY - offsetY + "px";
                menu.style.right = "auto";
            }
        };
        document.onmouseup = function() {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    });

    // --- Features ---
    btnVideoLink.addEventListener("click", function() {
        const video = document.querySelector("video");
        if (video) console.log("Video link:", video.currentSrc);
    });

    btnVideoCrtime.addEventListener("click", function() {
        const video = document.querySelector("video");
        if (video) console.log("Current Time:", video.currentTime.toFixed(2) + "s");
    });

    btnVideoPause.addEventListener("click", function() {
        const video = document.querySelector("video");
        if (video) video.pause();
    });

    btnVideoPlay.addEventListener("click", function() {
        const video = document.querySelector("video");
        if (video) video.play();
    });
  
    btnAdBlock.addEventListener("click", function() {
        (() => {
        // Ads id/class
        const adSelectors = [
            ".ytp-ad-module",               // video overlay ads
            ".ytd-display-ad-renderer",     // suggested ads
            ".ytd-banner-promo-renderer",   // banner ads
            "#ad_creative",                 // creative ads
            ".ytp-ad-player-overlay"        // overlay on player
        ];

        // funcion to let know is that an ad
        function isAd(el) {
            return adSelectors.some(sel => el.matches(sel) || el.closest(sel));
        }

        // Monitor to see if any ads appear
        const observer = new MutationObserver(mutations => {
            mutations.forEach(m => {
                m.addedNodes.forEach(node => {
                    if (!(node instanceof HTMLElement)) return;
                    if (isAd(node)) {
                        console.log("Adblock blocked 1 ad");
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        console.log("Ad monitor initialized. Any new ad will be logged");
    })();
    })

    rateInput.addEventListener("input", function() {
        const video = document.querySelector("video");
        if (video) {
            const val = parseFloat(rateInput.value) || 1;
            video.playbackRate = val;
        }
    });

    btnResetRate.addEventListener("click", function() {
        const video = document.querySelector("video");
        if (video) {
            video.playbackRate = 1;
            rateInput.value = "1";
        }
    });

    btnEnvMeta.addEventListener("click", function() {
        const data = document.querySelector("ytd-watch-flexy") ? document.querySelector("ytd-watch-flexy").data : null;
        if (data) console.log("Full Metadata:", data);
        else console.log("No metadata found!");
    });
  
    btnEnvView.addEventListener("click", function() {
        const data = document.querySelector("ytd-watch-flexy")?.data;
        if (data) {
             const viewCount = data?.contents?.twoColumnWatchNextResults?.results?.results?.contents
                ?.find(c => c.videoPrimaryInfoRenderer)
                ?.videoPrimaryInfoRenderer?.viewCount?.videoViewCountRenderer?.viewCount?.simpleText;
             console.log("View count:", viewCount || "Not found");
         } else {
            console.log("No data found!");
         }
    });
  
  
    btnEnvChannel.addEventListener("click", function() {
        const data = document.querySelector("ytd-watch-flexy")?.data;
        if (!data) {
            console.log("No data found!");
            return;
        }

        const secondary = data?.contents?.twoColumnWatchNextResults?.results?.results?.contents
            ?.find(c => c.videoSecondaryInfoRenderer)?.videoSecondaryInfoRenderer;

        const channelUrl = "https://youtube.com" + 
            (secondary?.owner?.videoOwnerRenderer?.title?.runs?.[0]?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl || "");

        const avatarUrl = secondary?.owner?.videoOwnerRenderer?.thumbnail?.thumbnails?.slice(-1)[0]?.url;

        console.log("Channel URL:", channelUrl || "Not found");
        console.log("Avatar URL:", avatarUrl || "Not found");
    });
  
    let isVideoInverted = false;
  
    btnFunInv.addEventListener("click", function() {
        const video = document.querySelector("video");
        if (!video) return;

        if (!isVideoInverted) {
            video.style.filter = "invert(1) hue-rotate(180deg)";
            isVideoInverted = true;
        } else {
            video.style.filter = "";
            isVideoInverted = false;
        }
    });
  
    btnFunShakyIcon.addEventListener("click", function() {
        const logo = document.querySelector("yt-icon.ytd-logo");
        if (!logo) return;

        // Add keyframes if there isn't
        if (!document.getElementById("yt-logo-shake-style")) {
            const style = document.createElement("style");
            style.id = "yt-logo-shake-style";
            style.textContent = `
            @keyframes shake {
                0% { transform: translate(1px, 1px) rotate(0deg); }
                25% { transform: translate(-1px, -2px) rotate(-1deg); }
                50% { transform: translate(-3px, 0px) rotate(1deg); }
                75% { transform: translate(3px, 2px) rotate(0deg); }
                100% { transform: translate(1px, -2px) rotate(-1deg); }
            }
            .shake {
                animation: shake 0.5s infinite;
            }`;
            document.head.appendChild(style);
         }

        // Apply animation
        logo.style.animation = "shake 0.5s infinite";
    });

    btnFunShakyThumbnail.addEventListener("click", function() {
        // add css if there isn't
        if (!document.getElementById("thumbnail-ytb-shorts-mod")) {
            const style = document.createElement("style");
            style.id = "thumbnail-ytb-shorts-mod";
            style.textContent = `a
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            yt-lockup-view-model img,
            ytd-thumbnail img,
            ytd-reel-shelf-renderer img,
            ytm-shorts-lockup-view-model img,
            #thumbnail img,
            #avatar img {
                animation: spin 3s linear infinite;
                transform-origin: center center;
            }
            `;
            document.head.appendChild(style);
        }
    });

    btnFunChangeIcon.addEventListener("click", function() {
        const logo = document.querySelector("#logo-icon");
        if (!logo) return;

        // kiểm tra dark mode
        function isDarkMode() {
            const theme = document.documentElement.getAttribute("data-theme");
            if (theme) return theme === "dark";
            const bg = window.getComputedStyle(document.body).backgroundColor;
            const rgb = bg.match(/\d+/g)?.map(Number);
            if (!rgb) return false;
            const brightness = (rgb[0]*299 + rgb[1]*587 + rgb[2]*114)/1000;
            return brightness < 128;
        }

        const darkLogoUrl = "https://cdn.jsdelivr.net/gh/codeguybutbackrooms/youtube-mod-menu/dark-mode-icon.png";
        const lightLogoUrl = "https://cdn.jsdelivr.net/gh/codeguybutbackrooms/youtube-mod-menu/light-mode-icon.png";
        const logoUrl = isDarkMode() ? darkLogoUrl : lightLogoUrl;

        // xóa content cũ
        while (logo.firstChild) logo.firstChild.remove();

        // tạo wrapper div
        const wrapper = document.createElement("div");
        wrapper.style.width = "100px";
        wrapper.style.height = "50px";
        wrapper.style.backgroundImage = `url(${logoUrl})`;
        wrapper.style.backgroundSize = "contain";
        wrapper.style.backgroundRepeat = "no-repeat";
        wrapper.style.backgroundPosition = "center";
        wrapper.style.animation = "shake 0.5s infinite";


        logo.appendChild(wrapper);
 
    });
    // --- Append menu to body ---
    document.body.appendChild(menu);
})();
