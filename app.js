const   sortTag = document.querySelectorAll(".dropdown-item"),
        containerTag = document.querySelector(".container");




        sortTag.forEach((element) => {
        element.addEventListener('click',(e) => {
                // console.log(e.target.id);
                const sortType = e.target.id;
                if(sortType === "ascending"){
                        // sort ascending
                        const videoSortedByAscendingOrder = videos.sort((a,b) => a.uploadDate.getTime() - b.uploadDate.getTime());  // sorting numbers
                        // console.log(videoSortedByAscendingOrder);
                        updateSortUI(videoSortedByAscendingOrder);

                }else{
                        // sort descending
                        const videoSortedByDescendingOrder = videos.sort((a,b) => b.uploadDate.getTime() - a.uploadDate.getTime());  // sorting numbers
                        // console.log(videoSortedByDescendingOrder);
                        updateSortUI(videoSortedByDescendingOrder);
                }
                });
      });


const videos = [
        {
                title: "Episode 83 - localStorage (part 2)",
                thumbnail: "./images/angel1.jpg",
                uploadDate: new Date(2021,6,6),
                viewCount: 140
        },
        {
                title: "Episode 82 - localStorage (part 1)",
                thumbnail: "./images/angel2.jpg",
                uploadDate: new Date(2021,6,5),
                viewCount: 310
        },
        {
                title: "Episode 85 - localStorage (part 4)",
                thumbnail: "./images/angel4.jpg",
                uploadDate: new Date(2021,6,8),
                viewCount: 12
        },

        {
                title: "Episode 84 - localStorage (part 3)",
                thumbnail: "./images/angel3.jpg",
                uploadDate: new Date(2021,6,7),
                viewCount: 3000
        },

        {
                title: "Episode 87 - localStorage (part 6)",
                thumbnail: "./images/angel1.jpg",
                uploadDate: new Date(2021,6,10),
                viewCount: 20000000
        },
        {
                title: "Episode 86 - localStorage (part 5)",
                thumbnail: "./images/angel5.jpg",
                uploadDate: new Date(2021,6,9),
                viewCount: 3
        }

];





const updateSortUI = (videos) => {

        containerTag.innerHTML = "";   // when revocking updateSortUI(); function, not to be repeat again and again.

        videos.forEach((video) => {

                const videoTag = `

                        <div class="videoContainer">
                                <img src=${video.thumbnail} class="imgages"/>
                                <h6 class="titles">${video.title}</h6>
                                <p class="dates">${video.uploadDate.toLocaleDateString()}</p>
                                <p class="viewCounts">${video.viewCount}</p>
                        </div>
                `;
                containerTag.innerHTML += videoTag;  // append

        });
}


updateSortUI(videos);









// String Comparing
// -1 = before
// 1 = after
// 0 = equal
const str1 = "hello",
      str2 = "world",
      str3 = "apple",
      str4 = "APPLE";

      str1.localeCompare(str2); // output = -1 / it means str1 comes first,afterr str2 come.
      str1.localeCompare(str3); // output = 1 / it means str3 comes first,after str3 come.
      str3.localeCompare(str4); // output = -1 / it means lowercase come first,after capital case come.
      str3.localeCompare(str4.toLowerCase()); // output = 0 / it means the same string value.


const students = [
        {
                name: "Alex",
                grade: 15
        },
        {
                name:"Devlin",
                grade: 14
        },
        {
                name: "Eagle",
                grade: 16
        },
        {
                name:"San",
                grade: 13
        }
];

// number sorting
students.sort((a,b) => a.grade - b.grade); // output = grade 13,14,15,16
students.sort((a,b) => b.grade - a.grade); // output = grade 16,15,14,13

// string sorting
students.sort((a,b) => a.name.localeCompare(b.name)); // output = Alex,Devlin,Eagle,San
students.sort((a,b) => b.name.localeCompare(a.name)); // output = San,Eagle,Devlin,Alex