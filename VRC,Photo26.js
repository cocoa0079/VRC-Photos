const photos = [
    {
        src: "img/VRChat_2026-01-07_19-59-11.491_2560x1440.png",
        title: "VRChat Photo 1",
        month: "2026-01"
    },

    {
        src: "img/VRChat_2026-01-09_14-23-57.512_2560x1440.png",
        title: "VRChat Photo 2",
        month: "2026-01"
    },

    {
        src: "img/VRChat_2026-01-24_00-51-07.510_2560x1440.png",
        title: "VRChat Photo 3",
        month: "2026-01"
    },

    {
        src: "img/VRChat_2026-02-13_23-10-57.819_2560x1440.png",
        title: "VRChat Photo 4",
        month: "2026-02"
    },

    {
        src: "img/VRChat_2026-02-18_22-13-37.371_2560x1440.png",
        title: "VRChat Photo 5",
        month: "2026-02"
    },

    {
        src: "img/VRChat_2026-02-18_22-37-17.279_2560x1440.png",
        title: "VRChat Photo 6",
        month: "2026-02"
    },

    {
        src: "img/VRChat_2026-03-17_19-53-22.090_2560x1440.png",
        title: "VRChat Photo 7",
        month: "2026-03"
    },

    {
        src: "img/VRChat_2026-03-18_04-55-09.450_2560x1440.png",
        title: "VRChat Photo 8",
        month: "2026-03"
    },

    {
        src: "img/VRChat_2026-03-22_21-15-30.979_2560x1440.png",
        title: "VRChat Photo 9",
        month: "2026-03"
    },

    {
        src: "img/VRChat_2026-04-06_22-17-17.080_2560x1440.png",
        title: "VRChat Photo 10",
        month: "2026-04"
    },

    {
        src: "img/VRChat_2026-04-07_22-28-50.701_2560x1440.png",
        title: "VRChat Photo 11",
        month: "2026-04"
    },

    {
        src: "img/VRChat_2026-04-14_23-10-11.385_2560x1440.png",
        title: "VRChat Photo 12",
        month: "2026-04"
    },

    {
        src: "img/VRChat_2026-05-12_22-18-52.525_2560x1440.png",
        title: "VRChat Photo 13",
        month: "2026-05"
    },

    {
        src: "img/VRChat_2026-05-24_23-48-02.290_2560x1440.png",
        title: "VRChat Photo 14",
        month: "2026-05"
    },

    {
        src: "img/VRChat_2026-05-26_23-30-34.819_2560x1440.png",
        title: "VRChat Photo 15",
        month: "2026-05"
    },

    {
        src: "img/VRChat_2026-06-17_17-18-21.076_2560x1440.png",
        title: "VRChat Photo 16",
        month: "2026-06"
    },

    {
        src: "img/VRChat_2026-06-23_22-44-20.500_2560x1440.png",
        title: "VRChat Photo 17",
        month: "2026-06"
    },

    {
        src: "img/VRChat_2026-06-29_19-37-46.033_2560x1440.png",
        title: "VRChat Photo 18",
        month: "2026-06"
    },

    {
        src: "img/VRChat_2026-07-11_23-32-18.151_2560x1440.png",
        title: "VRChat Photo 19",
        month: "2026-07"
    },

    {
        src: "img/VRChat_2026-07-12_00-51-50.685_2560x1440.png",
        title: "VRChat Photo 20",
        month: "2026-07"
    },

    {
        src: "img/VRChat_2026-07-12_01-10-19.953_2560x1440.png",
        title: "VRChat Photo 21",
        month: "2026-07"
    },

    {
        src: "img/VRChat_2026-08-16_09-01-18.187_2560x1440.png",
        title: "VRChat Photo 22",
        month: "2026-08"
    },

    {
        src: "img/VRChat_2026-08-25_22-49-25.822_2560x1440.png",
        title: "VRChat Photo 23",
        month: "2026-08"
    },

    {
        src: "img/VRChat_2026-08-28_01-15-57.206_2560x1440.png",
        title: "VRChat Photo 24",
        month: "2026-08"
    },

    {
        src: "img/VRChat_2026-09-23_00-35-42.756_2560x1440.png",
        title: "VRChat Photo 25",
        month: "2026-09"
    },

    {
        src: "img/VRChat_2026-09-23_01-38-47.006_2560x1440.png",
        title: "VRChat Photo 26",
        month: "2026-09"
    },

    {
        src: "img/VRChat_2026-09-23_23-27-39.121_2560x1440.png",
        title: "VRChat Photo 27",
        month: "2026-09"
    },

    {
        src: "",
        title: "VRChat Photo 28",
        month: "2026-10"
    },

    {
        src: "",
        title: "VRChat Photo 29",
        month: "2026-10"
    },

    {
        src: "",
        title: "VRChat Photo 30",
        month: "2026-10"
    },

    {
        src: "",
        title: "VRChat Photo 31",
        month: "2026-11"
    },

    {
        src: "",
        title: "VRChat Photo 32",
        month: "2026-11"
    },

    {
        src: "",
        title: "VRChat Photo 33",
        month: "2026-11"
    },

    {
        src: "",
        title: "VRChat Photo 34",
        month: "2026-12"
    },

    {
        src: "",
        title: "VRChat Photo 35",
        month: "2026-12"
    },

    {
        src: "",
        title: "VRChat Photo 36",
        month: "2026-12"
    },
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-image");
const closeModal = document.getElementById("close");

for (let month = 1; month <= 12; month++) {

    const monthKey = `2026-${String(month).padStart(2, "0")}`;
    const monthlyPhotos = photos.filter(
        photo => photo.month === monthKey
    );
    if (monthlyPhotos.length === 0) {
        continue;
    }

    const section = document.createElement("section");
    section.className = "month-section";
    const heading = document.createElement("h2");
    heading.textContent = `${month}月`;
    section.appendChild(heading);
    const grid = document.createElement("div");
    grid.className = "photo-grid";

    monthlyPhotos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.title;
        img.addEventListener("click", () => {
            modalContent.src = photo.src;
            modal.style.display = "flex";
        });
        grid.appendChild(img);
    });

    section.appendChild(grid);
    gallery.appendChild(section);
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


