<?php

$title = 'Atha construction Gallery | Home designers In mysore';
$description = 'Explore the gallery of Atha Construction, top home designers in mysore. Discover innovative designs, quality craftsmanship, and bespoke solutions for your dream home.';
$keywords = 'Home Designers In mysore, Innovative designers in Bangalore';
$h1 = "";

include 'header.php';
?>



<section class="sec-banner">
    <div class="bnr-img">
        <img src="./assetes/images/properties2/banner2.png" class="w-100" alt="residential construction companies in bangalore" title="residential construction companies in bangalore">

        <div class="bg-bnr-layer">

        </div>

        <div class="baner-cont-abs1 d-lg-block d-none">
            <h1>
               GALLERY
            </h1>
            <!-- <p class="bnr-sub-cont">
                Tomer Fridman | CA DRE# 01750717
            </p>

            <button>
                EXPLORE
            </button> -->

        </div>

    </div>
</section>

<!-- 
<section class="sec py-5 text-center" id="next-section">

    <div class="container">

        <h2 class="mn-hed py-4">
            ONGOING PROJECT
        </h2>

        <img src="./assetes/images/properties2/rosewood.png" class="w-100" alt="">

        <p class="prop-subhed pt-4 pb-2 mb-0">
            Rosewood Residences Beverly Hills
        </p>

        <p class="prop-cmfont pb-2">
            Louis Pasteur St 2, tel aviv, Israel
        </p>

        <p class="prop-pric pt-4">
            $59,000,000
        </p>



    </div>

</section> -->


<section class="sec py-5 text-center">
    <div class="container">
        <h2 class="mn-hed py-4">Gallery</h2>

        <!-- Container to hold dynamically rendered project cards -->
        <div id="projectList4" class="row d-flex justify-content-around pt-4"></div>


    </div>
</section>



<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAEpyMUKI8eH2xU7_3Ve3whYWs7dXWOrwI",
        authDomain: "atha-eb597.firebaseapp.com",
        databaseURL: "https://atha-eb597-default-rtdb.firebaseio.com",
        projectId: "atha-eb597",
        storageBucket: "atha-eb597.appspot.com",
        messagingSenderId: "793772614946",
        appId: "1:793772614946:web:45fb6b530052fbdc44b17b",
        measurementId: "G-NR4CK21TCC"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Function to render a single project item
    function renderProjectItem(project) {
        const projectList4 = document.getElementById("projectList4");


        // Create a new div element for the project card
        const projectCard = document.createElement("div");
        projectCard.classList.add("col-lg-4");
        projectCard.classList.add("text-center");
        projectCard.classList.add("pb-5");
      
        // Add the HTML structure for the project card
        projectCard.innerHTML = `
            
                <div class="img-posrel">
                    <a data-fancybox="gallery-0" href="${project.img_url}" data-expand="-1" class=" lazy">
                        <img src="${project.img_url}" class="w-100" alt="Project Image">
                    </a>
                </div>
                
            `;

       

        // Append the project card to the project list container
        projectList4.appendChild(projectCard);
    }

    // Function to render all projects
    function renderAllProjects(projects) {
        const projectList4 = document.getElementById("projectList4");
        projectList4.innerHTML = ""; // Clear any existing content
        projects.forEach((project) => {
            renderProjectItem(project);
        });
    }

    // Function to fetch projects in real-time from Firestore
    async function getProjectsRealTime() {
        const dbRef = collection(db, "Images");

        onSnapshot(dbRef, (querySnapshot) => {
            const projects = [];
            querySnapshot.forEach((doc) => {
                projects.push(doc.data());
            });
            renderAllProjects(projects);
        });
    }

    // Function to store project data in localStorage
    function storeProjectData(project) {
        localStorage.setItem("selectedProject", JSON.stringify(project));
    }

    // Function to render selected project details
    function renderSelectedProject(project) {

        // Create the structure for the selected project
        const projectDetails = document.createElement("div");
        projectDetails.classList.add("col-12", "text-center", "pb-5");


        projectDetails.innerHTML = `

        <img src="${project.img_url}" class="pro-det" alt="">

        <p class="prop-subhed pt-4 pb-2 mb-0">
        ${project.title}
        </p>

        <p class="prop-cmfont pb-2">
        ${project.des}
        </p>

        <p class="prop-pric pt-4">
        ${project.feets}
        </p>
        <p class="proj-inPric">${project.price}</p>
    `;

       
    }

    // Function to load selected project details on page load
    function loadSelectedProjectOnPageLoad() {
        const storedProject = localStorage.getItem("selectedProject");
        if (storedProject) {
            const project = JSON.parse(storedProject);
            renderSelectedProject(project);
        }
    }

    // Event Listener: Load stored project on page load
    document.addEventListener("DOMContentLoaded", loadSelectedProjectOnPageLoad);

    // Fetch projects on page load
    getProjectsRealTime();
</script>

<!--popupimg-->
<link rel="stylesheet" media="all" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" media="print" onload="this.media='all'">
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>


<?php
include 'footer.php';
?>