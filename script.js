function showBioPopup(speakerId, speakerName, speakerBio) {
    document.getElementById("popupTitle").innerText = speakerName;
    document.getElementById("popupBio").innerText = speakerBio;
    document.getElementById("bioPopup").style.display = "block";
  }
  
  function closeBioPopup() {
    document.getElementById("bioPopup").style.display = "none";
  }
  
  document.getElementById("speaker1").addEventListener("click", function() {
    showBioPopup("speaker1", "Dr. John Doe", "Dr. John Doe, a distinguished technology expert, brings over a decade of experience to the forefront of innovation. As the Chief Technology Officer at XYZ Tech Solutions, he has led groundbreaking projects, shaping the landscape of artificial intelligence, cloud computing, and cybersecurity. Driven by a passion for merging business acumen with technological advancements, John is not only a seasoned professional but also a sought-after speaker and influential contributor to the tech community. His commitment to advancing the industry and fostering collaboration makes him a prominent figure, and his engaging presentations at conferences leave a lasting impact on professionals navigating the dynamic world of technology.");
  });
  
  document.getElementById("speaker2").addEventListener("click", function() {
    showBioPopup("speaker2", "Dr.Jane Smith", "As a trailblazing presence in the tech industry, Jane Smith stands as a testament to the power of women in technology. With a rich background in software development and a keen eye for innovation, Jane has become a respected figure in the field. Currently serving as the Lead Software Engineer at a cutting-edge tech firm, she has been at the forefront of designing and implementing transformative solutions. Jane's commitment to empowering women in technology extends beyond her role, as she actively participates in initiatives to bridge the gender gap in the industry. At the upcoming TechCon Conference, Jane is set to inspire and share her expertise, offering valuable insights into the latest technological trends and strategies for success in the rapidly evolving tech landscape. Her presence is sure to catalyze meaningful discussions and encourage aspiring professionals, marking her as a beacon for female leaders in technology");
  });
  
  document.getElementById("speaker3").addEventListener("click", function() {
    showBioPopup("speaker3", "Dr.Mark Johnson ", "An influential force in the world of technology, Mark Johnson is a seasoned professional and a featured speaker at the upcoming TechCon Conference. As a seasoned software architect with a track record of successful project implementations, Mark's expertise spans a broad spectrum of emerging technologies, including artificial intelligence and cloud computing. Currently serving as the Chief Technology Officer at a leading tech company, Mark is recognized for his strategic vision and practical insights into navigating the challenges of the digital landscape. At TechCon, he aims to share his wealth of knowledge, providing attendees with a comprehensive understanding of the latest advancements in the tech industry. Mark's dynamic presentations are anticipated to offer valuable perspectives on leveraging technology for business growth, making his session a must-attend for those eager to stay ahead in the fast-paced world of tech innovation");
  });
  
  document.getElementById("speaker4").addEventListener("click", function() {
    showBioPopup("speaker4", "Dr.Sarah Martinez", "Distinguished technology leader and TechCon Conference speaker, Sarah Martinez, is a driving force in the realm of innovation and digital transformation. Serving as the Director of Technology at a forward-thinking tech firm, Sarah brings a wealth of experience and expertise to the conference stage. Her visionary leadership has been instrumental in spearheading groundbreaking projects that leverage cutting-edge technologies, ranging from artificial intelligence to data analytics. A fervent advocate for diversity and inclusion in the tech sector, Sarah actively mentors aspiring professionals and champions initiatives that promote equality. At TechCon, she is set to share her insights, offering a unique perspective on navigating the evolving tech landscape and inspiring the next generation of tech enthusiasts to break barriers and excel in the digital era. Sarah's impactful contributions make her a prominent figure in the conference, embodying excellence in technology and leadership.");
  });