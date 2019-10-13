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

  searchAndFilter(courses, search, subject, minimumCredits, maximumCredits) {
    if(search !== '') {
      let coursesAfterSearch = [];

      for(const course of Object.values(courses)) {
        for(const keyword of course.keywords) {
          if(keyword === (search)) {
            coursesAfterSearch.push(course);
            break;
          }
        }
      }
      courses = coursesAfterSearch;
    }

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
