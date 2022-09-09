window.onload = function() {
    let pictures = document.querySelector(".picture");
    if (document.contains(pictures)) {
        let pictures = document.getElementsByClassName("picture");
        let previous = document.getElementById('previous');
        let next = document.getElementById('next');
        // let slide_section = document.getElementById("slide_section");

        let count = 0;
        let pause = true;
        console.log(count);

        let display = function() {
            for (let i = 0; i < pictures.length; i++) {
                pictures[i].className = 'picture';
            }
            pictures[count].className = 'picture top';
        };

        let next_one = function() {
            count = (count + 1) % pictures.length;
            display();
        };

        let previous_one = function() {
            if (count == 0) {
                count = pictures.length - 1;
            } else {
                count = count - 1;
            }
            display();
        }

        // Next picture function
        next.addEventListener('click', function() {
            next_one();
        })

        // Previos picture function 
        previous.addEventListener('click', function() {
            previous_one();
        })


        // Auto change to next picture every four seconds
        setInterval(function() {
            if (pause) {
                next_one();
            }
        }, 4000)

        // Add a mouseover and mouseleave listener to every picture so 
        // that it pauses when the cursor hover pictures
        for (let i = 0; i < pictures.length; i++) {
            pictures[i].addEventListener('mouseover', function() {
                pause = false;
            })

            pictures[i].addEventListener('mouseleave', function() {
                pause = true;
            })
        }

        // Reference: DECO7040 practical class week10 popup screen
        const pop = document.getElementById('popup');

        // let pop_picture = document.getElementsByClassName('image_pop').src = "../images/cross.png";
        let select_picture = function() {
            console.log(count)
                // Here put images and story content in it
            if (count === 0) {
                document.getElementById('image_pop').src = "images/plato.jpg"
                document.getElementById('story_content').innerHTML = "The only primary sources for Atlantis are Plato's dialogues Timaeus and Critias; all other mentions of the island are based on them. The dialogues claim to quote Solon, who visited Egypt between 590 and 580 BC; they state that he translated Egyptian records of Atlantis. Written in 360 BC, Plato introduced Atlantis in Timaeus";
            } else if (count === 1) {
                document.getElementById('image_pop').src = "images/Mediterranean\ Sea.jpg"
                document.getElementById('story_content').innerHTML = "<b>Location hypotheses:</b><br><br>\n\nIn or near the Mediterranean Sea. Most of the historically proposed locations are in or near the Mediterranean Sea: islands such as Sardinia, Crete, Santorini (Thera), Sicily, Cyprus, and Malta; land-based cities or states such as Troy, Tartessos, and Tantalis (in the province of Manisa, Turkey);Israel-Sinai or Canaan; and northwestern Africa.";
            } else if (count === 2) {
                document.getElementById('image_pop').src = "images/Atlantic\ Ocean.jpg";
                document.getElementById('story_content').innerHTML = "<b>Location hypotheses:</b><br><br>\n\nIn the Atlantic Ocean. The location of Atlantis in the Atlantic Ocean has a certain appeal given the closely related names. Popular culture often places Atlantis there, perpetuating the original Platonic setting as they understand it. The Canary Islands and Madeira Islands have been identified as a possible location, west of the Straits of Gibraltar, but in relative proximity to the Mediterranean Sea. Detailed studies of their geomorphology and geology have demonstrated, however, that they have been steadily uplifted, without any significant periods of subsidence, over the last four million years, by geologic processes such as erosional unloading, gravitational unloading, lithospheric flexure induced by adjacent islands, and volcanic underplating.";
            } else if (count === 3) {
                document.getElementById('image_pop').src = "images/Ireland.jpg";
                document.getElementById('story_content').innerHTML = "<b>Location hypotheses:</b><br><br>\n\nIreland. In 2004, Swedish physiographist Ulf Erlingsson proposed that the legend of Atlantis was based on Stone Age Ireland. He later stated that he does not believe that Atlantis ever existed but maintained that his hypothesis that its description matches Ireland's geography has a 99.8% probability. The director of the National Museum of Ireland commented that there was no archaeology supporting this.";
            } else if (count === 4) {
                document.getElementById('image_pop').src = "images/Europe.jpg";
                document.getElementById('story_content').innerHTML = "<b>Location hypotheses:</b><br><br>\n\nIn Europe. Several hypotheses place the sunken island in northern Europe, including Doggerland in the North Sea, and Sweden (by Olof Rudbeck in Atland, 1672–1702). Doggerland, as well as Viking Bergen Island, is thought to have been flooded by a megatsunami following the Storegga slide of c. 6100 BC. Some have proposed the Celtic Shelf as a possible location, and that there is a link to Ireland.";
            }
        }

        let read_me = document.getElementsByClassName("read_me")
            // Add a listener to the button
        read_me[0].addEventListener('click', function() {
            select_picture();
            pop.classList.toggle('active');
        })

        // Get close button
        let close = document.getElementsByClassName('close')
        close[0].addEventListener('click', function() {
            pop.classList.toggle('active')
        })
    }


    let canvas = document.querySelector('.canvas');
    if (document.contains(canvas)) {
        let img = document.getElementById('charactor');
        let canvas = document.getElementById('canvas');
        let margin_x = parseInt(window.getComputedStyle(canvas).getPropertyValue("margin-left"));
        let margin_y = parseInt(window.getComputedStyle(canvas).getPropertyValue("margin-top"));

        let first_block = document.getElementById('first_block');
        let second_block = document.getElementById('second_block');
        let third_block = document.getElementById('third_block');
        let crown = document.getElementById('goal');
        let image_width = parseInt(window.getComputedStyle(img).getPropertyValue("width"));
        let image_height = parseInt(window.getComputedStyle(img).getPropertyValue("height"));
        let unactive = false

        let mouseX = 0
        let mouseY = 0

        function pick(e) {
            mouseX = e.pageX - margin_x;
            mouseY = e.pageY - margin_y;
            img.style.padding = `${e.pageY - image_height / 2 - margin_y}px 0px 0px ${e.pageX - image_width / 2 - margin_x}px`;
            // img.style.padding = "50px 0px 0px 60px";
            console.log(mouseX, mouseY);
            // console.log(margin_x)
            // console.log(margin_y)
        }


        // Click to switch state
        img.addEventListener('click', function() {
            unactive = !unactive;
            if (unactive) {
                canvas.addEventListener('mousemove', pick);
            } else {
                canvas.removeEventListener('mousemove', pick);
            }

        })

        // Handle activity game
        // console.log(image_height, image_width)

        // https://www.youtube.com/watch?v=bG2BmmYr9NQ this link teach how to use getComputedStyle
        // We get block property here x , y like first block left top point
        let first_block_x = parseInt(window.getComputedStyle(first_block).getPropertyValue("width")) + image_width / 2;
        let first_block_y = parseInt(window.getComputedStyle(first_block).getPropertyValue("top")) - image_height / 2;

        let second_block_x = parseInt(window.getComputedStyle(second_block).getPropertyValue("left")) - image_width / 2;
        let second_block_y = parseInt(window.getComputedStyle(second_block).getPropertyValue("height")) + image_height / 2;

        let second_block_x_2 = parseInt(window.getComputedStyle(second_block).getPropertyValue("width")) +
            parseInt(window.getComputedStyle(second_block).getPropertyValue("left")) + image_width / 2;

        let third_block_x = parseInt(window.getComputedStyle(third_block).getPropertyValue("left")) - image_width / 2;
        let third_block_y = parseInt(window.getComputedStyle(third_block).getPropertyValue("top")) - image_height / 2;

        let third_block_x_2 = parseInt(window.getComputedStyle(third_block).getPropertyValue("width")) +
            parseInt(window.getComputedStyle(third_block).getPropertyValue("left")) + image_height / 2;

        let crown_x = parseInt(window.getComputedStyle(crown).getPropertyValue("left"))
        let crown_y = parseInt(window.getComputedStyle(crown).getPropertyValue("top"))

        console.log(parseInt(window.getComputedStyle(canvas).getPropertyValue('height')), parseInt(window.getComputedStyle(canvas).getPropertyValue('width')))
        setInterval(function() {
            // Use X-axis to check
            if (mouseY > parseInt(window.getComputedStyle(canvas).getPropertyValue('height'))) {
                alert("Refresh to play the game again");
            }
            if (mouseX > parseInt(window.getComputedStyle(canvas).getPropertyValue('width'))) {
                alert("You lose! Refresh to play the game again");
            }
            if (mouseX < first_block_x) {
                if (mouseY > first_block_y) {
                    alert("You lose! Refresh to play the game again");
                }
            }

            if (mouseX > second_block_x && mouseX < second_block_x_2) {
                if (mouseY < second_block_y) {
                    console.log("second")
                    alert("You lose! Refresh to play the game again");
                }
            }

            if (mouseX > third_block_x && mouseX < third_block_x_2) {
                if (mouseY > third_block_y) {
                    console.log("third")
                    alert("You lose! Refresh to play the game again");
                }
            }

            if (mouseX > crown_x && mouseY > crown_y) {
                alert("You win. Congratulation!");
            }
        }, 20);
    }

    const contact_us = document.querySelector('.contact_us');
    if (document.contains(contact_us)) {
        const title_bar = document.getElementById('title_bar');

        const content_bar = document.getElementById('content_bar');

        const confirmed = document.getElementById('Confirmed')

        const Send_btn = document.getElementById('Send_btn');

        const output_title = document.getElementById('output_title');

        const output_content = document.getElementById('output_content');

        const text = document.getElementById('text');

        Send_btn.addEventListener('click', function() {
            output_title.innerHTML = title_bar.value;
            output_content.innerHTML = content_bar.value;
            text.classList.toggle('active');
        })

        let clear_content = function() {
            output_title.value = " ";
            output_content.value = "";
        }


        confirmed.addEventListener('click', function() {
            output_title.innerHTML = title_bar.value;
            output_content.innerHTML = content_bar.value;
            text.classList.toggle('active');
            clear_content();
            alert("Thank you!")
        })
    }

    const gallery = document.querySelector('.gallery')
    if (document.contains(gallery)) {
        const pic_one_img = document.getElementById('pic_one_img');

        let enter_pic_one = document.getElementById('enter_pic_one');

        const close_comment = document.getElementById('close_comment')

        const comment_place = document.getElementById('comment_place')

        const post = document.getElementById('post')

        const comment_pic = document.getElementById('comment_pic')


        let comment_section = document.getElementById('comment_section')

        pic_one_img.addEventListener('click', function() {
            enter_pic_one.classList.toggle('gocomment')
        })

        close_comment.addEventListener('click', function() {
            enter_pic_one.classList.toggle('gocomment')
        })

        post.addEventListener('click', function() {
            comment_section.innerHTML = comment_section.innerHTML + `<P class="comment">User123: ${comment_pic.value}</P>`;
        })

    }



}