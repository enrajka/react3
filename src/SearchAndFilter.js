class SearchAndFilter {
  
  createChips(search) {
    let keywordsList =["psychology","behavior", "emotion", "intelligence", "brain","computer","science", "operating", "system","systems","programming", "java", "chemistry", "math", "mathematics", 
    "algebra", "trigonometry", "social",   "interaction",   "engineering",  "calculus",   "analytical",  "geometry", 
    "differential",   "integral", "biology",   "animal",   "evolution",   "genetics",   "ecology",  "engineering", 
    "electrical",   "machine",   "building",   "user",   "interface",   "interfaces",   "design",   "ui", "law",   "social", 
    "policy",    "discrete",   "logic",   "algorithm",   "algorithms",  "statistics",   "statistical",   "methods"];
  
    for (let s = 0; s < keywordsList.length; s++) {
      if (keywordsList[s] === (search)) {
        return keywordsList[s];
      }
    }
    return "none";
  }

  searchAndFilter(currTags,courses, search, subject, minimumCredits, maximumCredits) {
    console.log("at state of searc: ",currTags);
    if(currTags.length !== 0) {
      var add = 0;
      var currIndex = 0;
      let coursesAfterSearch = [];
      for(const course of Object.values(courses)) {
        //console.log("keywords: ", course.keywords);
        //console.log("tags: ",currTags);
        for (const tag of currTags) {
          console.log("")
          // if (course.keywords.indexOf(tag) === -1) {
          //   console.log("not in course keywords");
          // }
        }
      }
        // while(currIndex < currTags.length) {
        //   if (course.keywords.indexOf(currTags[currIndex]) !== -1) {
        //     console.log(course.name + " contains keyword" + currTags[currIndex]);
        //   }
        //   currIndex++;
        // }
        // for (var i = 0; i < currTags.length;i++) {
        //   if (course.keywords.indexOf(currTags[i]) === -1) {
        //     add = 1;
        //   }
        //   if (add === 0) {
        //     coursesAfterSearch.push(course);
        //   }
        // }
        // for (var i = 0; i < course.keywords.length;i++) {
        //   if (currTags.indexOf(course.keywords[i]) === -1) {
        //     add = 1;
        //   }
        // }
        
        // for(const keyword of course.keywords) {
        //   // if (currTags.indexOf(keyword) !== -1) { 
        //   //   //need to go through all keywords and make sure that contains all the cyrrTags
        //   //   console.log(course + " includes a keyword in tags: " + currTags + " so it is displayed");
        //   //   coursesAfterSearch.push(course);
        //   //   break;
        //   // }
        //   for (var i = 0; i < currTags.length;i++) {
        //     if (currTags[i])
        //   }
        // }
      courses = coursesAfterSearch;
    }

  //   if(search !== '') {
  //     let coursesAfterSearch = [];
      
  //     // for (var tag of currTags) {
  //     //   for (const course of Object.values(courses)) {
  //     //     for(const keyword of course.keywords) {
  //     //         if(keyword !== tag) {
  //     //           coursesAfterSearch.splice(coursesAfterSearch.indexOf(course),1);//pop(course);
                
  //     //         }
  //     //     }
  //     //   }
  //     // }

  //    // this.createChips(search); 
  //   for(const course of Object.values(courses)) {
  //     for(const keyword of course.keywords) {
  //         if(keyword === (search)) {
  //           coursesAfterSearch.push(course);
  //           break;
  //         }
  //         // if (currTags.includes(keyword)) {
  //         //   coursesAfterSearch.push(course);
  //         //   break;
  //         // }
  //     }
  //   }
  //     courses = coursesAfterSearch;
  // }

    if(subject !== 'All') {
      let coursesAfterSubject = [];

      for(const course of Object.values(courses)) {
        if(course.subject === subject)
          coursesAfterSubject.push(course)
      }
      courses = coursesAfterSubject;
    }

    if(minimumCredits !== '') {
      let coursesAfterMinimumCredits = [];

      for(const course of Object.values(courses)) {
        if(course.credits >= parseInt(minimumCredits))
          coursesAfterMinimumCredits.push(course);
      }
      courses = coursesAfterMinimumCredits;
    }

    if(maximumCredits !== '') {
      let coursesAfterMaximumCredits = [];

      for(const course of Object.values(courses)) {
        if(course.credits <= parseInt(maximumCredits))
          coursesAfterMaximumCredits.push(course);
      }
      courses = coursesAfterMaximumCredits;
    }

    return courses;
  }
}

export default SearchAndFilter;
