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

    const btnEnvCinema = document.createElement("button");
    btnEnvCinema.textContent = "Enable cinema mode"
    tabContainers.env.appendChild(btnEnvCinema)

    // --- Fun Tab ---

    const h2funtab = document.createElement("h2");
    h2funtab.textContent = "This has a lot of hacks btw";
    tabContainers.fun.appendChild(h2funtab);

    const btnFunInv = document.createElement("button");
    btnFunInv.textContent = "Invert video's color";
    tabContainers.fun.appendChild(btnFunInv);

    const btnFunGray = document.createElement("button");
    btnFunGray.textContent = "Black-and-white video";
    tabContainers.fun.appendChild(btnFunGray);
  
    const btnFunSnowy = document.createElement("button");
    btnFunSnowy.textContent = "Snowy Weather";
    tabContainers.fun.appendChild(btnFunSnowy);

    const btnFunShaky = document.createElement("button");
    btnFunShaky.textContent = "Shake shake shake";
    tabContainers.fun.appendChild(btnFunShaky);

    const btnFunChangeIcon = document.createElement("button");
    btnFunChangeIcon.textContent = "Change YouTube icon";
    tabContainers.fun.appendChild(btnFunChangeIcon);

    const btnFunDVD = document.createElement("button");
    btnFunDVD.textContent = "DVD";
    tabContainers.fun.appendChild(btnFunDVD);

    const bgLabel = document.createElement("label");
    bgLabel.style.cssText = "font-size:12px; margin-top:6px;";
    bgLabel.textContent = "Set background color: ";

    const bgInput = document.createElement("input");
    bgInput.type = "text"; // nhập hex, ví dụ #ff0000
    bgInput.value = "#191919"; // mặc định giống menu

    Object.assign(bgInput.style, {
        width: "80px",
        background: "#111",
        color: "#0f0",
        border: "1px solid #555",
        borderRadius: "6px",
        padding: "3px",
        marginLeft: "5px"
    });

    bgLabel.appendChild(bgInput);
    tabContainers.fun.appendChild(bgLabel);

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
    creditP2.textContent = "YT Mod Menu v0.6";
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
                ".ytp-ad-module", // video overlay ads
                ".ytd-display-ad-renderer", // suggested ads
                ".ytd-banner-promo-renderer", // banner ads
                "#ad_creative", // creative ads
                ".ytp-ad-player-overlay" // overlay on player
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
  
    btnEnvCinema.addEventListener("click", function() {
        ['#secondary', '#related', '#comments', '#below', '#guide'].forEach(sel => {
  			const el = document.querySelector(sel);
  			if (el) el.style.display = 'none';
		});
		document.body.style.background = 'black';
		document.querySelector('ytd-watch-flexy').style.maxWidth = '100%';
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

    btnFunGray.addEventListener("click", function() {
        document.querySelector('video').style.filter = 'grayscale(1)';
    });
  
    btnFunSnowy.addEventListener("click", function() {
        for(let i=0;i<50;i++){const s=document.createElement('div');Object.assign(s.style,{position:'fixed',top:'-10px',left:Math.random()*100+'%',width:'8px',height:'8px',background:'white',borderRadius:'50%',opacity:Math.random(),animation:`fall${i} ${3+Math.random()*5}s linear infinite`});document.body.appendChild(s);const st=document.createElement('style');st.textContent=`@keyframes fall${i}{0%{transform:translateY(0)}100%{transform:translateY(${innerHeight+20}px)}}`;document.head.appendChild(st);}
    });

    btnFunShaky.addEventListener("click", function() {
        const style = document.createElement("style");
        style.textContent = `
                @keyframes shaky {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    10% { transform: translate(-1px, -2px) rotate(-1deg); }
                    20% { transform: translate(-3px, 0px) rotate(1deg); }
                    30% { transform: translate(3px, 2px) rotate(0deg); }
                    40% { transform: translate(1px, -1px) rotate(1deg); }
                    50% { transform: translate(-1px, 2px) rotate(-1deg); }
                    60% { transform: translate(-3px, 1px) rotate(0deg); }
                    70% { transform: translate(3px, 1px) rotate(-1deg); }
                    80% { transform: translate(-1px, -1px) rotate(1deg); }
                    90% { transform: translate(1px, 2px) rotate(0deg); }
                    100% { transform: translate(1px, -2px) rotate(-1deg); }
                }
                yt-icon.ytd-logo,
                #contents,
                .yt-searchbox-input,
                yt-button-shape,
                ytd-notification-topbar-button-renderer,
                .ytd-topbar-menu-button-renderer,
                .ytd-video-owner-renderer,
                .ytd-video-description-infocards-section-renderer,
                .ytd-reel-shelf-renderer,
                .img.ytCoreImageContentModeScaleAspectFill,
                .yt-formatted-string,
                .ytd-comment-view-model,
                #additional-section,
                #simple-box,
                #player-full-bleed-container,
                #subscribe-button,
                #actions,
                #title,
                #bottom-row,
                #scroll-container
                {
                    animation: shaky 0.5s infinite;
                }
            `;
        document.head.appendChild(style);
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
            const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
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

    // Đăng ký feature DVD vào menu mod tổng
    btnFunDVD.addEventListener("click", () => {
        // --- DVD div ---
        const dvdDiv = document.createElement("div");
        dvdDiv.id = "dvd";
        Object.assign(dvdDiv.style, {
            position: "fixed",
            left: "0px",
            top: "0px",
            height: "50px",
            width: "100px",
            mask: "url('https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg')",
            WebkitMask: "url('https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "75px",
            backgroundPosition: "center",
            zIndex: "999999", // nổi trên YouTube
            pointerEvents: "none" // ko che click
        });

        document.body.appendChild(dvdDiv);

        // --- DVD animation logic ---
        let x = 0,
            y = 0,
            dirX = 1,
            dirY = 1;
        const speed = 2;
        const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188", "#e1a5a5", "#9f99c3", "#5e1111", "#34a569", "#8f3d90", "#540849", "#2982c5", "#f5c600", "#9b4923", "#007291"];
        let dvd = dvdDiv;
        dvd.style.backgroundColor = pallete[0];
        let prevColorChoiceIndex = 0;
        const dvdWidth = dvd.clientWidth;
        const dvdHeight = dvd.clientHeight;

        function getNewRandomColor() {
            const currentPallete = [...pallete];
            currentPallete.splice(prevColorChoiceIndex, 1);
            const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
            prevColorChoiceIndex = colorChoiceIndex < prevColorChoiceIndex ? colorChoiceIndex : colorChoiceIndex + 1;
            return currentPallete[colorChoiceIndex];
        }

        function animate() {
            const screenHeight = window.innerHeight;
            const screenWidth = window.innerWidth;

            if (y + dvdHeight >= screenHeight || y < 0) {
                dirY *= -1;
                dvd.style.backgroundColor = getNewRandomColor();
            }
            if (x + dvdWidth >= screenWidth || x < 0) {
                dirX *= -1;
                dvd.style.backgroundColor = getNewRandomColor();
            }
            x += dirX * speed;
            y += dirY * speed;
            dvd.style.left = x + "px";
            dvd.style.top = y + "px";

            if (document.body.contains(dvd)) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    });


    bgInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            const color = bgInput.value.trim();
            if (/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(color)) {
                // đổi background cho các class/selector YouTube phổ biến + searchbox
                const containers = document.querySelectorAll(
                    "ytd-app, ytd-watch-flexy, #page-manager, ytd-masthead, #primary, #content, .ytSearchboxComponentInputBox, .ytSearchboxComponentSearchButton, #cinematics"
                );

                containers.forEach(el => el.style.backgroundColor = color);

                // riêng SVG icon trong search button có inline bg-color cũng phải đổi
                const svgIcons = document.querySelectorAll(".ytSearchboxComponentSearchButton svg");
                svgIcons.forEach(svg => svg.style.backgroundColor = color);

                console.log("YouTube BG color applied:", color);
            } else {
                console.log("Invalid hex color:", color);
            }
        }
    });

    // --- Append menu to body ---
    document.body.appendChild(menu);
})();
