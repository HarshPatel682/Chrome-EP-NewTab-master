/**
 * Controls the image being displayed in newtab.
 * 
 * 
IMG-20221021-WA0002.jpg
IMG-20221021-WA0001.jpg
IMG-20221021-WA0005.jpg
IMG-20220823-WA0049.jpg

 */
backgrounds.Photo = new Model({

    /**
     * Total number of images in /images/backup-wallpapers
     */
    BACKUP_IMAGES_COUNT: 11,
    /**
     * Number of images to use at startup.
     * By using cached images, we can cache images that will be
     * fetched as well
     */
    STARTUP_IMAGE_COUNT: 26,

    offlineImages: [
        {
                title: "Akshardam filled summer",
                author: "Akshardam, Home of the great Lord",
                url: "/images/backup-wallpapers/akdm_days.png"
        },
        {
                title: "Our valuable days in Arlington. Man I miss it.",
                author: "Arlington, VA",
                url: "/images/backup-wallpapers/arlington_days.png"
        },
        {
                title: "Guru's and (mainly) Arti's WEDDING AHHHHH",
                author: "AKDM Samu Lagna",
                url: "/images/backup-wallpapers/arti_vish_wedding_part1.png"
        },
        {
                title: "Dr Akshay's wedding dayyy",
                author: "Axay",
                url: "/images/backup-wallpapers/axay_wed.png"
        },
        {
                title: "OMG its a Doggooooo",
                author: "Nala, only Nala",
                url: "/images/backup-wallpapers/dog_days.png"
        },
        {
                title: "Dubai trip was a great time and man, we need that red velvet latter again...",
                author: "Dubai Part 2",
                url: "/images/backup-wallpapers/dubai_part2.png"
        },
        {
                title: "When we first started. Our early Kajurs",
                author: "Reecha and Harsh like each other?",
                url: "/images/backup-wallpapers/early_dates.png"
        },
        {
                title: "** Dom's mumble growl ** Family",
                author: "Copy right from Fast and Furious series",
                url: "/images/backup-wallpapers/full_fam.jpg"
        },
        {
                title: "The Surti family inviting the vahu",
                author: "Vahu comes home",
                url: "/images/backup-wallpapers/Harsh_fam.png"
        },
        {
                title: "Always need protection",
                author: "",
                url: "/images/backup-wallpapers/helmet_harsh.jpg"
        },
        {
                title: "Man, I could go for some ice cream rn.",
                author: "milk + other ingredients",
                url: "/images/backup-wallpapers/icecream_1.png"
        },
        {
                title: "Seflies in Indiaaaa, the DESH",
                author: "DESH",
                url: "/images/backup-wallpapers/india_self.png"
        },
        {
                title: "We go MARRIED???? WHaaat?",
                author: "Arlington County",
                url: "/images/backup-wallpapers/marry.png"
        },
        {
                title: "Raccoon's engagement",
                author: "Mesa and Axars Engagement day",
                url: "/images/backup-wallpapers/mesa_ring_day.png"
        },
        {
                title: "Mirror mirror on the wall, whose the cutest of them all",
                author: "Mirrors",
                url: "/images/backup-wallpapers/mirror_selfie.png"
        },
        {
                title: "More Mirrors, really. But hey, we look nice.",
                author: "Free Campus Merch",
                url: "/images/backup-wallpapers/mirror_selfies_2.png"
        },
        {
                title: "Your Favorite Brother in Law, Daxesh",
                author: "Shena's husband",
                url: "/images/backup-wallpapers/moto_jiju_dax.png"
        },
        {
                title: "Reecha and Harsh's Engagement dayyy",
                author: "Cincy Mandir",
                url: "/images/backup-wallpapers/oct8_ring_day.png"
        },
        {
                title: "New Father and New Mother",
                author: "Aklav and Dungri Parents",
                url: "/images/backup-wallpapers/our_eng.jpg"
        },
        {
                title: "Reechas first time meeting the larger family on Bob's side",
                author: "Boston, MA",
                url: "/images/backup-wallpapers/parth_eng.jpg"
        },
        {
                title: "Maro Pran got Married, sad face, that also means Nala is gone forever :(",
                author: "Tuscon, AZ",
                url: "/images/backup-wallpapers/pran_wed.jpg"
        },
        {
                title: "But wait, lemme just take a selfieee",
                author: "US",
                url: "/images/backup-wallpapers/selfie_1.png"
        },
        {
                title: "We planned for Shena's freedom, but really it was Dax's Vidaay",
                author: "Poconos, PA",
                url: "/images/backup-wallpapers/shenas_freedom_planning.png"
        },
        {
                title: "BIG SISTER IS LEAVING AHHHHHH (only technically)",
                author: "Get off the car Bhaskar",
                url: "/images/backup-wallpapers/shena_wedding.png"
        },
        {
                title: "Lets take the general husband/wife photo, but hey we look good",
                author: "byStanders",
                url: "/images/backup-wallpapers/standard_pics.png"
        },
        {
                title: "Ahh yes, the crackhead squad with a few missing",
                author: "Quack Cocaine",
                url: "/images/backup-wallpapers/theCracks.jpg"
        }
        ],

    getRandomInt: function(max) {
        return Math.floor(Math.random() * max);
    },

    /**
     * Generates a permutation of size N.
     */
    permutation: function(N) {
        var i, ind, temp, numbers;
        numbers = [];
        for (i = 0; i < N; i++) {
            numbers.push(i);
        }
        for (i = 0; i < N - 1; i++) {
            ind = i + Math.floor((N - i) * Math.random());
            temp = numbers[i];
            numbers[i] = numbers[ind];
            numbers[ind] = temp;
        }
        return numbers;
    },

    /**
     * Replace '&amp;' in url returned by reddit to '&'
     * ref: https://www.reddit.com/r/redditdev/comments/7xqbc2/redditmedia_images_are_broken/
     */
    unescapeUrl: function(url) {
        return url.replace(/&amp;/g, '&');
    },

    displayTitleAuthor: function(title, author) {
        // Regex matching
        // TODO: Rename myRe and myArray to something more meaningful
        var myRe = /(?:\[|\()\s*oc\s*(?:\]|\))/gi;
        var myArray = myRe.exec(title);
        if (myArray != null) {
            title = title.slice(0, myArray.index).trim() + ' ' + title.slice(myRe.lastIndex).trim();
        }
        myRe = /\[?\(?\s*\d+,?\d*\s*(?:x|\u00D7)\s*\d+,?\d*\s*\]?\)?/gi;
        myArray = myRe.exec(title);
        if (myArray != null) {
            title = title.slice(0, myArray.index).trim() + ' ' + title.slice(myRe.lastIndex).trim();
        }
        var div = document.createElement('div');
        var titleSpan = document.createElement('span');
        var titleText = document.createTextNode(title.trim());
        titleSpan.className = 'title image-text';
        titleSpan.appendChild(titleText);
        var authorSpan = document.createElement('span');
        var authorText = document.createTextNode('posted by ' + author.trim());
        authorSpan.className = 'author image-text';
        authorSpan.appendChild(authorText);
        div.appendChild(titleSpan);
        div.appendChild(authorSpan);
        document.body.appendChild(div);
    },

    displayImage: function(image) {
        var url = image.url;
        document.body.style.background = "url(" + url + ") no-repeat center center fixed";
        document.body.style.backgroundSize = "contain";
        this.displayTitleAuthor(image.title, image.author);
    },

    parseImage: function(response, imageNumber) {
        var imageData = {};
        imageData.title = response.data.children[imageNumber % (response.data.children.length)].data.title;
        imageData.author = response.data.children[imageNumber % (response.data.children.length)].data.author;
        imageData.url = this.unescapeUrl(response.data.children[imageNumber % (response.data.children.length)].data.preview.images[0].source.url);
        return imageData;
    },

    isValidLocalStorageState: function(cacheSize) {
        var count = localStorage.getItem("count");
        var order = localStorage.getItem("order");
        var cachedImages = localStorage.getItem("cachedImages");
        var isCountValid = count != null && Number(count) >= 0;
        var isOrderValid = order != null && JSON.parse(order).length == this.BACKUP_IMAGES_COUNT;
        var isCachedImagesValid = cachedImages != null && JSON.parse(cachedImages).length <= cacheSize;
        return isCountValid && isOrderValid && isCachedImagesValid;
    },

    /**
     * Setup LocalStorage before displaying first image.
     */
    setup: function() {
        var order = this.permutation(this.BACKUP_IMAGES_COUNT);
        localStorage.setItem("count", 0);
        localStorage.setItem("order", JSON.stringify(order));
        localStorage.setItem("cachedImages", JSON.stringify([]));
    },

    /**
     * Displays the image.
     * TODO: Update function name & doc. This function does more than just display.
     */
    display: function(numberOfImages, cacheSize) {
        if (!this.isValidLocalStorageState(cacheSize)) {
            this.setup();
        }
        // From this point onwards, count, order and cachedImages are in a valid state (to know what a valid state is, refer to the IsValidLocalStorage function).
        var count = Number(localStorage.getItem("count"));
        var order = JSON.parse(localStorage.getItem("order"));
        var cachedImages = JSON.parse(localStorage.getItem("cachedImages"));
        // We display backup images in the following cases.
        // * count < STARTUP_IMAGE_COUNT: We are yet to finish the quota of offline images before we can use images from the cache.
        // * count >= STARTUP_IMAGE_COUNT but cachedImages.length == 0: Can happen when HTTP requests to r/EarthPorn fail. We fall back to display the backup images.
        
        //removed these lines
        /*if (count < this.STARTUP_IMAGE_COUNT || cachedImages.length == 0) {

            var order_index = count % this.BACKUP_IMAGES_COUNT;
            this.displayImage(this.offlineImages[order[order_index]]);
        } else {
            this.displayImage(cachedImages[0]);
            // Once we consume an image from the cache, remove it from the cache.
            cachedImages.splice(0, 1);
            localStorage.setItem("cachedImages", JSON.stringify(cachedImages));
        }*/

        var rand_int = this.getRandomInt(this.STARTUP_IMAGE_COUNT)
        this.displayImage(this.offlineImages[rand_int])


        var xmlHttp = new XMLHttpRequest();
        var parent = this;
        xmlHttp.onreadystatechange = function() {
            // If the HTTP request is successful, then we store the image received into our cache. If the request is unsuccessful, the cache simply does not get updated.
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var response = JSON.parse(xmlHttp.response);
                // Fetch an image and cache it so it can be displayed quickly
                var imageData = parent.parseImage(response, count);
                cachedImages.push(imageData);
                localStorage.setItem("cachedImages", JSON.stringify(cachedImages));
            }
        }
        // We send an HTTP request only if our cache is not full.
        if (cachedImages.length < cacheSize) {
            xmlHttp.open("GET", "https://www.reddit.com/r/EarthPorn/top/.json?limit=" + Number(numberOfImages), true);
            xmlHttp.send(null);
        }
        localStorage.setItem("count", count + 1);
    }
});
