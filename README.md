# SnK-Consultation  
Online Health Consultation Service  
  
## Showcase  
<img src="https://drive.google.com/uc?export=download&id=19n20a9_1epELefQ0iJEZZD4waXc8q6LF" width=25% height=25%>  
  
> image of home screen  
<br>  

<img src="https://drive.google.com/uc?export=download&id=19oX8BRJfJ1Puwjkzgj3gpmeVrO-OfMLc" width=25% height=25%>  
  
> Image of Specialities Screen  
<br>  

<img src="https://drive.google.com/uc?export=download&id=1ANCMGeT8g0EKfA543HVXMBFRQl-O9V0l" width=25% height=25%>  
  
> Image of Specialities Screen with Searching  
<br>  

<img src="https://drive.google.com/uc?export=download&id=19vhAofsPL3KXXwN8nREJC2klAL73_GZ7" width=25% height=25%>  
  
> Image of Doctors List  
<br>  

<img src="https://drive.google.com/uc?export=download&id=1A5NnBfVkbq9McFaAOf0zqs1AYgFfErO_" width=25% height=25%>  
  
> Image of Doctors List from a Speciality  
<br>  

<img src="https://drive.google.com/uc?export=download&id=1AET_BZFI3QGrNt0if0X5xW8JFMUW8HqD" width=25% height=25%>  
  
> Image of Doctors List from a Speciality with Searching  
<br>  

<img src="https://drive.google.com/uc?export=download&id=1A2ic-ISAihsRBaclhtzILTeSqDeCu5xn" width=25% height=25%>  
  
> Image of Doctor Booking  
<br>  

  
## Documentation
### Table of Contents
  [App](#appjs)  
  [SampleData](#sampledatajs)  
  [HomeScreen](#homescreenjs)  
  [SpecialityListScreen.js](#specialitylistscreenjs)  
  [DoctorListScreen](#doctorlistscreenjs)  
  [DoctorBookingScreen](#doctorbookingscreenjs)  
  
  
### App.js
  #### `myTheme`  
  > color scheme app
  #### `NavigationContainer`
  > container untuk routing screen dan header option
### SampleData.js
  #### `banners`
  > link image banner
  #### `doctorIcon`
  > link image doctor icon
  #### `arrowIcon`
  > link image arrow icon
  #### `loremIpsum`
  > data string lorem ipsum
  #### `specialities`
  > data json specialities
  #### `doctors`
  > data json doctor's name and speciality
### HomeScreen.js
  #### `colors`
  > access to current color's theme
  #### `PromotionCarousel.js`
  > image slider showing photos of promotions
  #### `SpecialityBit`
  > list of a bit (3 item) of specialities for quick access from home
  #### `DoctorsBit`
  > list of a bit (5 item) of doctors for quick access from home
### SpecialityListScreen.js
  #### `colors`
  > access to current color's theme
  #### `refresh`
  > state variable for signalling flatlist re-render
  #### `dataCache`
  > variable for storing data of specialities that matches search query
  #### `filterSpecialities()`
  > function for filtering out specialities using query from search box
  #### `ItemDesign`
  > item design for each item in flatlist
  #### `SearchBar`
  > search bar to get query from user input, then pass query into filterSpecialities()
  #### `FlatList`
  > showing inside of specialities data
### DoctorListScreen.js
  #### `colors`
  > access to current color's theme
  #### `specialityName`
  > selected speciality name from received parameter.  
  > default speciality name is 'doctor', which won't filter any doctor
  #### `refresh`
  > state variable for signalling flatlist re-render
  #### `dataCache`
  > variable for storing copy of sample data
  #### `dataFilteredSpeciality`
  > variable for storing data after filterSpeciality()
  #### `dataFilteredName`
  > variable for storing data after filterName()
  #### `filterSpeciality()`
  > function for filtering out specialities using query from parameter specialityName
  #### `filterName()`
  > function for filtering out names from `dataFilteredSpeciality` using query from search box
  #### `ItemDesign`
  > item design for each item in flatlist
  #### `SearchBar`
  > search bar to get query form user input, then pass query into `filterSpeciality()`
  #### `FlatList`
  > showing inside of `dataFilteredName`.  
  > `dataCache` filtered into `dataFilteredSpeciality`  
  > `dataFilteredSpeciality` filtered with search box query, into `dataFilteredName`
### DoctorBookingScreen.js
  #### `colors`
  > access to current color's theme
  #### `doctorId`
  > selected `doctorId` from received parameter.
  #### `getDoctor()`
  > function for finding doctor data from `doctorId`
  #### `Linking`
  > linking open whatsapp api for sending message
 

## To-Do  
~~create github~~  
~~create bare screen~~  
~~page 1 carousel~~  
~~collecting dummy data~~  
~~page 1 speciality list~~  
~~page 1 doctor list~~  
~~page 1 fine tune layout~~  
~~page 2 speciality grid~~  
~~page 2 fine tune layout~~  
~~page 3 doctor list~~  
~~page 4 info & button~~  
~~page 2 search speciality~~  
~~page 3 search name~~  
~~page 4 message wa~~  
~~page 4 fine tune layout~~  
~~theme styleing~~  
~~theme color choosing~~  
~~bug page 3 speciality into doctor list, data supposed to be filtered consistently~~  
~~github wiki :~~  
  - ~~screen explain parameter, variable, function, custom component :~~  
    - ~~App~~  
    - ~~HomeScreen~~  
    - ~~SpecialityListScreen~~  
    - ~~DoctorListScreen~~  
  
~~explain that detail will be in comment in code files~~  
~~explain sampleData~~  

~~add more comment on obscure code~~  
~~separate cluttered styling~~  
