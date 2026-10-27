
const nominees = [
  {
    name: "Gadbless Sackey",
    position: "MCE",
    district: "Asunafo North",
    score: 79,
    remarks: "Met most requirements but needs improvement in specific areas.",
    selected: true
  },
  {
    name: "Joseph Addai",
    position: "DCE",
    district: "Asunafo South",
    score: 78,
    remarks: "Met most requirements but needs improvement in specific areas.",
    selected: true
  },
  {
    name: "",
    position: "DCE",
    district: "Asutifi North",
    score: null,
    remarks: "Appointment pending",
    selected: null
  },
  {
    name: "",
    position: "DCE",
    district: "Asutifi South",
    score: null,
    remarks: "Appointment pending",
    selected: null
  },
  {
    name: "",
    position: "MCE",
    district: "Tano North",
    score: null,
    remarks: "Appointment pending",
    selected: null
  },
  {
    name: "",
    position: "MCE",
    district: "Tano South",
    score: null,
    remarks: "Appointment pending",
    selected: null
  },

//ashantiRegionNominees = [
    { name: "", position: "DCE", district: "Adansi-Asokwa", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Fomena", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "New Edubease", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Afigya Kwabre North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Afigya Kwabre South", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Ahafo Ano North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Ahafo Ano South East", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Ahafo Ano South West", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Akrofuom", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Odotobri", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Manso Nkwanta", score: null, remarks: "Vetting result pending", selected: null },

    { name: "Tonto John", position: "DCE", district: "Manso Edubia", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Aheto Clifford Etornam", position: "MCE", district: "Asante Akim Central", score: 85, remarks: "Met all requirements and performed satisfactorily.", selected: true },

    { name: "Obeng Mensah Stephen", position: "DCE", district: "Asante Akim North", score: 70, remarks: "Approved by the Vetting Committee but not selected for appointment.", selected: false },
    { name: "Osarfo Enock", position: "DCE", district: "Asante Akim North", score: 89, remarks: "Met all requirements and performed satisfactorily.", selected: true },

    { name: "Oduro Francis", position: "MCE", district: "Asante Akim South", score: 90, remarks: "Met all requirements and performed satisfactorily", selected: true },
    { name: "Isaac Agyei Baafi", position: "DCE", district: "Asawase", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Isaac Agyei Baafi", position: "MCE", district: "Asokwa", score: 49, remarks: "Did not meet the required threshold.", selected: false },
    { name: "Baidoo Theodore", position: "DCE", district: "Atwima-Kwanwoma", score:80 , remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "", position: "DCE", district: "Atwima Mponua", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Atwima-Nwabiagya South", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Atwima-Nwabiagya North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Christian Anokye", position: "MCE", district: "Bekwai", score: 89, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "", position: "DCE", district: "Bosome-Freho", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Agyemang Badu Bright", position: "DCE", district: "Bosomtwe", score: 69, remarks: "Met most requirements but needs improvement in specific areas.", selected: true },

    { name: "Ebenezer Kumi Adu-Gyamfi", position: "MCE", district: "Ejisu", score: 95, remarks: "Met all requirements and performed satisfactorily", selected: true },
    { name: "Nsiah Samuel Aboagye", position: "MCE", district: "Ejisu", score: 90, remarks: "Approved by the Vetting Committee but not selected for appointment.", selected: false },
    { name: "Donkor Kwaku Sarpong Wilberforce", position: "MCE", district: "Ejisu", score: 49, remarks: "Did not meet the required threshold.", selected: false },

    { name: "", position: "MCE", district: "Ejura-Sekyedumase", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Juaben", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Bantama", score: null, remarks: "Vetting result pending", selected: null },

    { name: "Anim Tenkorang McFinley", position: "MCE", district: "Manhyia North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Akatuk Felix", position: "MCE", district: "Manhyia North", score: 80, remarks: "Met all requirements and performed satisfactorily", selected: true },

    { name: "", position: "MCE", district: "Manhyia South", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Nhyiaeso", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Subin", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Kwabre East", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Kwabena Owusu", position: "MCE", district: "Kwadaso", score: 70, remarks: "Met all requirements and performed satisfactorily", selected: true },
    { name: "Simon Akaribo", position: "MCE", district: "Mampong", score: 80, remarks: "Met all requirements and performed satisfactorily", selected: true },
    { name: "", position: "MCE", district: "Obuasi East", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Samira Abdullah", position: "MCE", district: "Obuasi West", score: 68, remarks: "Met most requirements but needs improvement in specific areas.", selected: true },
    { name: "", position: "MCE", district: "Offinso South", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Offinso North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Oforikrom", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Old Tafo", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Sekyere Afram Plains", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Nomah Essel Daniel", position: "DCE", district: "Nsuta-Kwamang-Beposo", score: 69, remarks: "Met most requirements but needs improvement in specific areas.", selected: true },
    { name: "", position: "DCE", district: "Afigya Sekyere East", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Kumawu", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Effiduase-Asokore", score: null, remarks: "Vetting result pending", selected: null },

    { name: "Ampofo Clement Asumadu", position: "MCE", district: "Suame", score: 70, remarks: "Approved by the Vetting Committee but not selected for appointment.", selected: false },
    { name: "Anastasia Achampong", position: "MCE", district: "Suame", score: 91, remarks: "Met all requirements and performed satisfactorily", selected: true },

// bonoRegionNominees = [
  //bonoRegionNominees = [
    {
        name: "Sah Bartholomew Kwadwo",
        position: "DCE",
        district: "Banda Ahenkro",
        score: 70,
        remarks: "Met all requirements and performed satisfactorily",
        selected: true
    },
    {
        name: "Agyeman Frozella",
        position: "MCE",
        district: "Berekum East",
        score: 80,
        remarks: "Met all requirements and performed satisfactorily.",
        selected: true
    },
    {
        name: "",
        position: "DCE",
        district: "Berekum West",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "",
        position: "MCE",
        district: "Dormaa Central",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "",
        position: "DCE",
        district: "Dormaa East",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "",
        position: "DCE",
        district: "Dormaa West",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "Stephen Kwame Adjei",
        position: "DCE",
        district: "Jaman North",
        score: 80,
        remarks: "Met all requirements and performed satisfactorily",
        selected: true
    },
    {
        name: "",
        position: "MCE",
        district: "Jaman South",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "",
        position: "MCE",
        district: "Sunyani East",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "",
        position: "DCE",
        district: "Sunyani West",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "",
        position: "DCE",
        district: "Tain",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "",
        position: "MCE",
        district: "Wenchi",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },

     //bonoEastRegionNominees = [
    {
        name: "Gyan Fredrick Amponsah",
        position: "MCE",
        district: "Atebubu-Amantin",
        score: 70,
        remarks: "Met all requirements and performed satisfactorily",
        selected: true
    },
    {
        name: "Aminu Ibrahim",
        position: "MCE",
        district: "Kintampo North",
        score: 45,
        remarks: "Did not meet the required threshold.",
        selected: false
    },
    {
        name: "Charesoga Quajo Nicholas",
        position: "MCE",
        district: "Kintampo North",
        score: 70,
        remarks: "Met all requirements and performed satisfactorily",
        selected: true
    },
    {
        name: "",
        position: "DCE",
        district: "Kintampo South",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "Twumasi Lot",
        position: "DCE",
        district: "Nkoranza North",
        score: 75,
        remarks: "Met all requirements and performed satisfactorily.",
        selected: true
    },
    {
        name: "Agmenusi Timothy",
        position: "MCE",
        district: "Nkoranza South",
        score: 70,
        remarks: "Met all requirements and performed satisfactorily.",
        selected: true
    },
    {
        name: "",
        position: "MCE",
        district: "Pru East",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "Maprayam Eric Uwumbrobi",
        position: "DCE",
        district: "Pru West",
        score: 85,
        remarks: "Met all requirements and performed satisfactorily.",
        selected: true
    },
    {
        name: "",
        position: "DCE",
        district: "Sene East",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "",
        position: "DCE",
        district: "Sene West",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },
    {
        name: "Ishmael Owusu Gyan",
        position: "MCE",
        district: "Techiman South",
        score: 50,
        remarks: "Committee decision",
        selected: true
    },
    {
        name: "Adjei Maxwell Korang",
        position: "MCE",
        district: "Techiman South",
        score: 40,
        remarks: "Did not meet the required threshold.",
        selected: false
    },
    {
        name: "Alhassan Abubakari Bajo",
        position: "MCE",
        district: "Techiman South",
        score: 80,
        remarks: "Met all requirements and performed satisfactorily.",
        selected: true
    },
    {
        name: "",
        position: "MCE",
        district: "Techiman North",
        score: null,
        remarks: "Vetting result pending",
        selected: null
    },

     //centralRegionNominees = [
    { name: "", position: "DCE", district: "Abura-Asebu-Kwamankese", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Agona East", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Agona West", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Ajumako-Enyan-Essiam", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Asikuma-Odoben-Brakwa", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Assin Central", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Assin North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Assin South", score: null, remarks: "Vetting result pending", selected: null },

    { name: "Amidu Sumaila", position: "MCE", district: "Awutu-Senya East", score: 70, remarks: "Approved by the Vetting Committee but not selected for appointment.", selected: false },
    { name: "Munifa Abdul Wahab", position: "MCE", district: "Awutu-Senya East", score: 79, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "David Ekow Fynn", position: "MCE", district: "Awutu-Senya East", score: 45, remarks: "Did not meet the required threshold.", selected: false },

    { name: "Nathaniel Tei Atsekpe", position: "DCE", district: "Awutu-Senya West", score: 85, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "", position: "MCE", district: "Cape Coast North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Cape Coast South", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Effutu", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Ekumfi", score: null, remarks: "Vetting result pending", selected: null },

    { name: "Abubakar Siddick Abdul Muneen", position: "MCE", district: "Gomoa East", score: 80, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "Abdul Mumeen", position: "MCE", district: "Gomoa East", score: null, remarks: "Vetting result pending", selected: null },

    { name: "", position: "DCE", district: "Gomoa Central", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Gomoa West", score: null, remarks: "Vetting result pending", selected: null },

    { name: "Kwofie Eustace Aloysius", position: "MCE", district: "Komenda-Edina-Eguafo-Abirem", score: 87, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "Felix Okyere Kotey", position: "MCE", district: "Komenda-Edina-Eguafo-Abirem", score: 79, remarks: "Approved by the Vetting Committee but not selected for appointment.", selected: false },

    { name: "", position: "MCE", district: "Mfantseman", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Kwadwo Nti Asante", position: "DCE", district: "Twifo-Atii Morkwaa", score: 80, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "", position: "DCE", district: "Hemang Lower Denkyira", score: null, remarks: "Vetting result pending", selected: null },

    { name: "Awinsoba Isaac", position: "MCE", district: "Upper Denkyira East", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Maxwell Annor Sarbeng", position: "MCE", district: "Upper Denkyira East", score: 80, remarks: "Met all requirements and performed satisfactorily.", selected: true },

    { name: "Samuel Kwasi Obeng", position: "DCE", district: "Upper Denkyira West", score: 79, remarks: "Met all requirements and performed satisfactorily.", selected: true },




     //easternRegionNominees = [
    { name: "", position: "MCE", district: "Abuakwa North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Christopher Amoah Amponsah", position: "MCE", district: "Abuakwa South", score: 89, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "", position: "DCE", district: "Achiase", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Manuel Opoku Onyinah Nimako", position: "MCE", district: "Akropong", score: 81, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "", position: "DCE", district: "Akwapim South", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Ofoase-Ayirebi", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Asene Akroso Manso", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Asuogyaman", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Alebina Charles", position: "DCE", district: "Atiwa East", score: 75, remarks: "Met all requirements and performed satisfactorily.", selected: true },
    { name: "", position: "DCE", district: "Atiwa West", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Ayensuano", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Akim Oda", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Abirem", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Akim Swedru", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Akwatia", score: null, remarks: "Vetting result pending", selected: null },

    { name: "Tetteh Isaac Matey", position: "DCE", district: "Fanteakwa North", score: 80, remarks: "Approved by the Vetting Committee but not selected for appointment..", selected: false },
    { name: "Asakiya Emmanuel", position: "DCE", district: "Fanteakwa North", score: 70, remarks: "Approved by the Vetting Committee but not selected for appointment.", selected: false },

    { name: "Krofa Kwakye Prince", position: "DCE", district: "Fanteakwa North", score: 85, remarks: "Met all requirements and performed satisfactorily.", selected: true },

    { name: "Bright Amankwah-Opoku", position: "MCE", district: "Kade", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Samuel Kofi Appau Dwamena", position: "MCE", district: "Kade", score: null, remarks: "Vetting result pending", selected: null },

    { name: "", position: "DCE", district: "Afram Plains North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Afram Plains South", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Abetifi", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Mpraeso", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Nkawkaw", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Lower Manya", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "New Juaben North", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "New Juaben South", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "MCE", district: "Nsawam Adoagyiri", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Okere", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Suhum", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Upper Manya", score: null, remarks: "Vetting result pending", selected: null },
    { name: "", position: "DCE", district: "Upper West Akim", score: null, remarks: "Vetting result pending", selected: null },
    { name: "Oduro Konadu Joseph Prince", position: "MCE", district: "Lower West Akim", score: 79, remarks: " Met all requirements and performed satisfactorily.", selected: true },
    { name: "", position: "MCE", district: "Yilo Krobo", score: null, remarks: "Vetting result pending", selected: null },


      //greaterAccraRegionNominees = [
    { name: "", position: "MCE", district: "Ablekuma Central", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ablekuma North", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ablekuma West", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ablekuma South", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Odododiodio", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Okaikwei Central", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Okaikwei South", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ada", score: null, selected: null, remarks: "Vetting result pending" },

    { name: "Salifu Larmin", position: "DCE", district: "Sege", score: 87, selected: true, remarks: "Met all requirements and performed satisfactorily." },

    { name: "", position: "MCE", district: "Adenta", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ashaiman", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ayawaso Central", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ayawaso East", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ayawaso North", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Ayawaso West", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Anyaa-Sowutuom", score: null, selected: null, remarks: "Vetting result pending" },

    { name: "Addison Kwasi Panyin", position: "MCE", district: "Dome-Kwabenya", score: 98, selected: true, remarks: "Met all requirements and performed satisfactorily." },
    { name: "Isaac Gedia Kwabena", position: "MCE", district: "Dome-Kwabenya", score: 80, selected: false, remarks: "Approved by the Vetting Committee but not selected for appointment." },
    { name: "Oheneba-Prempeh Paul Atta", position: "MCE", district: "Dome-Kwabenya", score: null, selected: null, remarks: "Vetting result pending" },

    { name: "Nketiah B. K Ebenezer", position: "MCE", district: "Trobu", score: 78, selected: false, remarks: "Approved by the Vetting Committee but not selected for appointment." },
    { name: "Kwesi Kakra Addison", position: "MCE", district: "Trobu", score: 98, selected: true, remarks: "Met all requirements and performed satisfactorily." },

    { name: "", position: "MCE", district: "Bortianor-Ngleshie-Amanfrom", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Domeabra-Obom", score: null, selected: null, remarks: "Vetting result pending" },

    { name: "Nana Akua Ampofoah Yamoah", position: "DCE", district: "Amasaman", score: 89, selected: true, remarks: "Met all requirements and performed satisfactorily." },

    { name: "", position: "MCE", district: "Korle Klottey", score: null, selected: null, remarks: "Vetting result pending" },

    { name: "Dzobo Edward Orlando Yaw", position: "MCE", district: "Kpone-Katamanso", score: 80, selected: false, remarks: "Met the vetting requirements but was not selected for appointment" },
    { name: "Boafo Richeal Afumwah", position: "MCE", district: "Kpone-Katamanso", score: 98, selected: true, remarks: "Met all requirements and performed satisfactorily." },

    { name: "", position: "MCE", district: "Krowor", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Dade Kotopon", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Abokobi-Madina", score: null, selected: null, remarks: "Vetting result pending" },

    { name: "Astiko Joseph Enam", position: "MCE", district: "Ledzokuku", score: 86, selected: true, remarks: "Met all requirements and performed satisfactorily." },

    { name: "Thomas Annan-Quarshie", position: "DCE", district: "Ningo-Prampram", score: 98, selected: true, remarks: "Met all requirements and performed satisfactorily." },
    { name: "", position: "MCE", district: "Okaikwei North", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Shai-Osudoku", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Tema Central", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Tema East", score: null, selected: null, remarks: "Vetting result pending" },

    { name: "Felicia Adibem", position: "MCE", district: "Tema West", score: 81, selected: true, remarks: "Met all requirements and performed satisfactorily." },

    { name: "", position: "MCE", district: "Weija", score: null, selected: null, remarks: "Vetting result pending" },



 //northEastNominees = [
  {
    name: "",
    position: "DCE",
    district: "Bunkpurugu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Chereponi",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Jangdow Daniel",
    position: "MCE",
    district: "Nalerigu",
    score: 68,
    selected: true,
    remarks: "Met most requirements but needs improvement in specific areas."
  },
  {
    name: "",
    position: "DCE",
    district: "Yagaba-Kubori",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Walewale",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Yunyoo",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },



//northernRegionNominees = [
  {
    name: "Abukari Mohammed Mashud",
    position: "MCE",
    district: "Gushegu",
    score: 83,
    selected: true,
    remarks: "Met all requirements and performed satisfactorily."
  },
  {
    name: "",
    position: "DCE",
    district: "Karaga",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Kpandai",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Kumbungu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Mion",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Nanton",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Bimbilla",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Wulensi",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Jalulah Nbayan Alfred",
    position: "DCE",
    district: "Saboba",
    score: 70,
    selected: true,
    remarks: "Met all requirements and performed satisfactorily."
  },
  {
    name: "Mumuni Abubakari ``  ",
    position: "MCE",
    district: "Sagnarigu",
    score: 70,
    selected: true,
    remarks: "Met all requirements and performed satisfactorily."
  },
  {
    name: "Issah Sayida",
    position: "MCE",
    district: "Savelugu",
    score: 79,
    selected: true,
    remarks: "Met all requirements and performed satisfactorily."
  },
  {
    name: "",
    position: "MCE",
    district: "Tamale Central",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Tamale North",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Tamale South",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Tatale-Sanguli",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Abdul Latif Dawuni Salifu",
    position: "DCE",
    district: "Tolon",
    score: null,
    selected: null,
    remarks: "Vetting result pending"
  },
  {
    name: "Mariam Danzummah",
    position: "MCE",
    district: "Yendi",
    score: null,
    selected: null,
    remarks: "Vetting result pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Zabzugu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },


 //otiRegionNominees = [
  {
    name: "",
    position: "DCE",
    district: "Biakoye",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Guan",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Buem",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Akan",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Krachi East",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Redeemer Faith Amegbo-Dela",
    position: "DCE",
    district: "Krachi Nchumuru",
    score: 70,
    selected: true,
    remarks: "Met all requirements and performed satisfactorily."
  },
  {
    name: "VIFAH CHRISTIAN",
    position: "DCE",
    district: "Krachi West",
    score: 60,
    selected: true,
    remarks: "Met most requirements but needs improvement in specific areas."
  },
  {
    name: "Bedakman Tignabile James",
    position: "DCE",
    district: "Nkwanta North",
    score: 78,
    selected: true,
    remarks: "Met all requirements and performed satisfactorily."
  },
  {
    name: "",
    position: "MCE",
    district: "Nkwanta South",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },


 //savannahRegionNominees = [
  {
    name: "",
    position: "MCE",
    district: "Bole",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Yapei-Kusawgu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Prince Okumah",
    position: "MCE",
    district: "Salaga South",
    score: 60,
    selected: true,
    remarks: "Met most requirements but needs improvement in specific areas."
  },
  {
    name: "Draman Sachibu",
    position: "DCE",
    district: "Salaga North",
    score: 70,
    selected: true,
    remarks: "Met all requirements and performed satisfactorily."
  },
  {
    name: "",
    position: "DCE",
    district: "Daboya-Mankarigu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Ewura Yussif",
    position: "DCE",
    district: "Sawla-Tuna-Kalba",
    score: null,
    selected: null,
    remarks: "Vetting result pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Damango",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },


   //upperEastRegionNominees = [
    { name: "", position: "MCE", district: "Bawku Central", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Zebilla", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Binduri", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Bolgatanga East", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Bolgatanga Central", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Bongo", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Builsa North", score: null, selected: null, remarks: "Vetting result pending" },

    { name: "Prince Kwesi Akable", position: "DCE", district: "Builsa South", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "Emmanuel Ayaazok", position: "DCE", district: "Builsa South", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "Gifty Apung", position: "DCE", district: "Builsa South", score: 69, selected: true, remarks: "Met most requirements but needs improvement in specific areas." },


    { name: "", position: "DCE", district: "Garu", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "MCE", district: "Navrongo Central", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Chiana-Paga", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Nabdam", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Pusiga", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Talensi", score: null, selected: null, remarks: "Vetting result pending" },
    { name: "", position: "DCE", district: "Tempane", score: null, selected: null, remarks: "Vetting result pending" },

 
 
 //   upperWestRegionNominees = [
  {
    name: "",
    position: "DCE",
    district: "Daffiama-Bussie-Issa",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Jirapa",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Lambussie",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Lawra",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Nadowli Kaleo",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Nandom",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Sissala East",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Sissala West",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Wa East",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Henry Angmaalanuba Ngminbahaara",
    position: "MCE",
    district: "Wa Central",
    score: 84,
    selected: true,
    remarks: "Met all requirements and performed satisfactorily."
  },
  {
    name: "Kpetizie Boorobaa Evans",
    position: "DCE",
    district: "Wa West",
    score: 51,
    selected: true,
    remarks: "Met most requirements but needs improvement in specific areas."
  },

 
 // voltaRegionNominees = [
  {
    name: "",
    position: "DCE",
    district: "Adaklu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Adza Elikplim Kelvin ",
    position: "DCE",
    district: "Afadjato South",
    score: 69,
    selected: true,
    remarks: "Met most requirements but needs improvement in specific areas."
  },
  {
    name: "",
    position: "DCE",
    district: "Agotime-Ziope",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Akatsi North",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Akatsi South",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Anlo",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "Central Tongu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Pascaline Dziedzorm Gozo",
    position: "MCE",
    district: "Ho Central",
    score: 30,
    selected: false,
    remarks: "Did not meet the required threshold."
  },
  {
    name: "",
    position: "DCE",
    district: "Ho West",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Nanbare Chanjah Eric",
    position: "MCE",
    district: "Hohoe",
    score: 69,
    selected: true,
    remarks: "Met most requirements but needs improvement in specific areas."
  },
  {
    name: "",
    position: "MCE",
    district: "Keta",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Ketu North",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "Ketu South",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "Adzakorsi Gilbert Destiny",
    position: "MCE",
    district: "Kpando",
    score: 68,
    selected: false,
    remarks: "Committe decision, need official appointiment"
  },
  {
    name: "",
    position: "DCE",
    district: "North Dayi",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "North Tongu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "DCE",
    district: "South Dayi",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },
  {
    name: "",
    position: "MCE",
    district: "South Tongu",
    score: null,
    selected: null,
    remarks: "Appointment pending"
  },


  //westernRegionNominees = [
    {
        name: "",
        position: "MCE",
        district: "Ahanta West",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "DCE",
        district: "Amenfi Central",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "Gyan Arthur Bismark",
        position: "MCE",
        district: "Amenfi West",
        score: 75,
        selected: true,
        remarks: "Met all requirements and performed satisfactorily."
    },
    {
        name: "",
        position: "MCE",
        district: "Effia",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "DCE",
        district: "Ellembelle",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "MCE",
        district: "Jomoro",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "DCE",
        district: "Mpohor",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "MCE",
        district: "Evalue-Gwira",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "Emmanuel Kobby Dadson",
        position: "MCE",
        district: "Prestea-Huni Valley",
        score: 80,
        selected: true,
        remarks: "Met all requirements and performed satisfactorily."
    },
    {
        name: "Benjamin Annan",
        position: "MCE",
        district: "Essikado-Ketan",
        score: 80,
        selected: true,
        remarks: "Met all requirements and performed satisfactorily."
    },
    {
        name: "Micheal Eshun",
        position: "MCE",
        district: "Sekondi-Takoradi",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "MCE",
        district: "Shama",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "Salim Baba Ndebugri",
        position: "MCE",
        district: "Tarkwa-Nsuaem",
        score: null,
        selected: true,
        remarks: "Met all requirements and performed satisfactorily."
    },
    {
        name: "Godfred Boadi",
        position: "MCE",
        district: "Amenfi East",
        score: 71,
        selected: true,
        remarks: "Met all requirements and performed satisfactorily."
    },
    {
        name: "Emmanuel Adusei",
        position: "DCE",
        district: "Wassa East",
        score: 89,
        selected: true,
        remarks: "Met all requirements and performed satisfactorily"
    },


     //westernNorthRegionNominees = [
    {
        name: "",
        position: "MCE",
        district: "Aowin",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "Koranteng Johnson",
        position: "DCE",
        district: "Bia East",
        score: 50,
        selected: true,
        remarks: " Met most requirements but needs improvement in specific areas."
    },
    {
        name: "",
        position: "DCE",
        district: "Bia West",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "Ebenezer Abban",
        position: "MCE",
        district: "Bibiani-Anhwiaso-Bekwai",
        score: 50,
        selected: false,
        remarks: "Vetting Committee Decision."
    },
     {
        name: "Gamel Baidoo",
        position: "MCE",
        district: "Bibiani-Anhwiaso-Bekwai",
        score: 80,
        selected: true,
        remarks: "Met all requirements and performed satisfactorily"
    },
    {
        name: "Emmanuel Nyamekye",
        position: "DCE",
        district: "Bodi",
        score: 75,
        selected: true,
        remarks: "Met all requirements and performed satisfactorily. "
    },
    {
        name: "",
        position: "DCE",
        district: "Juabeso",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "DCE",
        district: "Sefwi-Akontombra",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "MCE",
        district: "Sefwi-Wiawso",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },
    {
        name: "",
        position: "DCE",
        district: "Suaman",
        score: null,
        selected: null,
        remarks: "Vetting result pending"
    },



];
// Vetting result based on score
function getResult(score) {
  if (score === null || score === undefined || score === "") {
    return {
      label: "SCORE PENDING",
      className: "conditional"
    };
  }

  if (score >= 70) {
    return {
      label: "APPROVED",
      className: "approved"
    };
  }

  if (score >= 55) {
    return {
      label: "CONDITIONALLY APPROVED",
      className: "conditional"
    };
  }

  if (score >= 50) {
    return {
      label: "COMMITTEE DECISION",
      className: "conditional"
    };
  }

  return {
    label: "NOT APPROVED",
    className: "rejected"
  };
}

// Final appointment decision
function getAppointmentStatus(nominee) {
  if (nominee.selected === true) {
    return {
      label: "SELECTED FOR APPOINTMENT",
      className: "approved"
    };
  }

  if (nominee.selected === false) {
    return {
      label: "NOT SELECTED",
      className: "rejected"
    };
  }

  return {
    label: "DECISION PENDING",
    className: "conditional"
  };
}

function renderResults() {
  const body = document.getElementById("resultsBody");

  body.replaceChildren();

  nominees.forEach((nominee, index) => {
    // Preserve pending scores as null instead of converting them to zero.
    const score =
      nominee.score === null ||
      nominee.score === undefined ||
      nominee.score === ""
        ? null
        : Number(nominee.score);

    // Skip only invalid scores. Pending scores are still displayed.
    if (
      score !== null &&
      (!Number.isFinite(score) || score < 0 || score > 100)
    ) {
      return;
    }

    const result = getResult(score);
    const appointment = getAppointmentStatus(nominee);
    const row = document.createElement("tr");

    // Number
    const numberCell = document.createElement("td");
    numberCell.textContent = index + 1;
    row.appendChild(numberCell);

    // Candidate details
    [
      nominee.name || "Pending",
      nominee.position || "—",
      nominee.district || "—",
      score === null ? "Pending" : score,
      score === null ? "Pending" : `${score}%`
    ].forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    // Vetting result badge
    const resultCell = document.createElement("td");
    const resultBadge = document.createElement("span");

    resultBadge.className = `status ${result.className}`;
    resultBadge.textContent = result.label;

    resultCell.appendChild(resultBadge);
    row.appendChild(resultCell);

    // Appointment decision badge
    const appointmentCell = document.createElement("td");
    const appointmentBadge = document.createElement("span");

    appointmentBadge.className = `status ${appointment.className}`;
    appointmentBadge.textContent = appointment.label;

    appointmentCell.appendChild(appointmentBadge);
    row.appendChild(appointmentCell);

    // Remarks
    const remarksCell = document.createElement("td");
    remarksCell.textContent = nominee.remarks || "—";
    row.appendChild(remarksCell);

    body.appendChild(row);
  });

  // Refresh search information after rendering
  filterResults();
}

// Search and filter results
const resultsSearch = document.getElementById("resultsSearch");
const resultsBody = document.getElementById("resultsBody");
const searchInfo = document.getElementById("searchInfo");

function filterResults() {
  const query = resultsSearch.value.trim().toLowerCase();
  const rows = Array.from(resultsBody.querySelectorAll("tr"));

  let visibleCount = 0;

  rows.forEach(row => {
    const matches = row.textContent.toLowerCase().includes(query);

    row.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  if (query === "") {
    searchInfo.textContent =
      `Showing all ${rows.length} vetting results`;
  } else {
    searchInfo.textContent =
      `${visibleCount} result${visibleCount === 1 ? "" : "s"} found`;
  }
}

resultsSearch.addEventListener("input", filterResults);

// Display results
renderResults();
