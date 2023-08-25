import { StateCreator } from "zustand";

interface LanguageProficiency {
  language: string;
  proficiency: string;
}

export interface Review {
  reviewerAvatar: string;
  reviewerName: string;
  from: [string, string];
  rating: number;
  review: string;
  company: string;
  date: Date;
}

export interface PersonalInfo {
  profilePicture: string;
  firstName: string;
  lastName: string;
  country: string;
  currentCity: string;
  contactNumber: string;
  birthday: Date;
  summary: string;
  educationalInstitute: string;
  studyField: string;
  from: Date;
  to: Date;
  certification: string;
  languageProficiency: Array<LanguageProficiency>;
  reviews: Array<Review>;
  experience: number;
}

export interface EmploymentHistoryItem {
  companyName: string;
  position: string;
  location?: string;
  country?: string;
  startDate: Date;
  endDate?: Date;
  currentRole?: boolean;
  jobDescription?: string;
}

interface TopSkillItem {
  name: string;
  selected: boolean;
}

export type ProviderType = "Dribbble" | "LinkedIn";

interface PortfolioItem {
  provider: ProviderType;
  link: string;
}

export interface WorkExperience {
  jobSuccess: number;
  jobCompleted: number;
  employmentHistory: Array<EmploymentHistoryItem>;
  topSkills: Array<TopSkillItem>;
  portfolio: Array<PortfolioItem>;
}

export interface Availability {
  workType: string;
  paymentType: string;
}

interface NewService {
  serviceTitle: string;
  servicePrice: number;
  frequency: number;
  taskDetails: Array<string>;
}

export interface ServiceDetails {
  hourlyRate: number;
  fixedProject: Array<string>;
  newService: NewService;
}

export type UserType = "Founder" | "Freelancer" | "Undefined";
export interface FreelancerProfileData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience;
  availability: Availability;
  serviceDetails: ServiceDetails;
}

export interface FreelancerProfileSlice {
  freelancerProfileData: FreelancerProfileData;
  setProfilePicture: (image: string) => void;
  removeProfilePicture: () => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setCountry: (country: string) => void;
  setCurrentCity: (city: string) => void;
  setContactNumber: (contactNumber: string) => void;
  setBirthday: (birthday: Date) => void;
  setSummary: (summary: string) => void;
  setEducationalInstitute: (educationalInstitute: string) => void;
  setStudyField: (studyField: string) => void;
  setStudyFrom: (from: Date) => void;
  setStudyTo: (to: Date) => void;
  addNewLanguage: (language: string, proficiency: string) => void;
  changeLanguageItem: (language: string, index: number) => void;
  changeProficiencyItem: (proficiency: string, index: number) => void;
  addWorkExperience: (
    title: string,
    companyName: string,
    location: string,
    country: string,
    currentRole: boolean,
    startDate: Date,
    endDate: Date,
    jobDescription: string
  ) => void;
  addTopSkillItem: (key: number) => void;
  removeTopSkillItem: (key: number) => void;
  changePortfolioItem: (
    key: number,
    provider: ProviderType,
    link: string
  ) => void;
  addPortfolioItem: (provider: ProviderType, link: string) => void;
  setWorkType: (type: string) => void;
  setPaymentMethod: (method: string) => void;
  setHourlyRate: (hourlyRate: number) => void;
  createNewService: (
    serviceTitle: string,
    servicePrice: number,
    frequency: number,
    taskDetails: string[]
  ) => void;
  setReviewData: (data: Array<Review>) => void;
}

export const createFreelancerProfileSlice: StateCreator<
  FreelancerProfileSlice
> = (set, get) => ({
  freelancerProfileData: {
    personalInfo: {
      profilePicture: "",
      firstName: "",
      lastName: "",
      country: "US",
      currentCity: "",
      contactNumber: "",
      birthday: new Date(),
      summary: "",
      educationalInstitute: "",
      studyField: "",
      from: new Date(),
      to: new Date(),
      certification: "",
      languageProficiency: [
        {
          language: "English",
          proficiency: "Basic",
        },
        {
          language: "",
          proficiency: "",
        },
      ],
      reviews: [
        {
          reviewerAvatar: "/review_avatar/Ellipse3920.png",
          reviewerName: "Kurt Bates",
          from: ["US", "United States"],
          rating: 5,
          review:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered before apply to any course..",
          company: "Tuning Motion Pvt.Ltd",
          date: new Date(),
        },
        {
          reviewerAvatar: "/review_avatar/Ellipse3922.png",
          reviewerName: "Corina McCoy",
          from: ["US", "United States"],
          rating: 4.6,
          review:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered before apply to any course. There are many variations of passages of Lorem Ipsum available, but the majority have suffered before apply to any course.",
          company: "Cactus Creatives Pvt.Ltd",
          date: new Date(),
        },
        {
          reviewerAvatar: "/review_avatar/Ellipse3921.png",
          reviewerName: "Ethan Perez",
          from: ["US", "United States"],
          rating: 4.9,
          review:
            "There are many variations of passages of Lorem Ipsum availaable, but the majority have suffered before apply to any course.",
          company: "BlockBit Creatives Pvt.Ltd",
          date: new Date(),
        },
      ],
      experience: 2,
    },
    workExperience: {
      jobSuccess: 85,
      jobCompleted: 102,
      employmentHistory: [
        {
          companyName: "Tuning Motion Pvt. Ltd.",
          position: "Digital Artist",
          startDate: new Date("2023-02-19"),
          endDate: new Date("2023-03-09"),
          jobDescription:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered before apply to any course ...",
        },
        {
          companyName: "Cactus Creatives Pvt. Ltd.",
          position: "Web Designer",
          startDate: new Date("2022-06-19"),
          endDate: new Date("2022-07-09"),
          jobDescription:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered before apply to any course ...",
        },
      ],
      topSkills: [
        {
          name: "Programming",
          selected: true,
        },
        {
          name: "Copywriting",
          selected: true,
        },
        {
          name: "Website Design",
          selected: false,
        },
        {
          name: "Frontend Dev",
          selected: false,
        },
        {
          name: "Social Marketing",
          selected: false,
        },
        {
          name: "JavaScript",
          selected: true,
        },
        {
          name: "Email Marketing",
          selected: false,
        },
        {
          name: "Video Editing",
          selected: true,
        },
        {
          name: "WordPress",
          selected: false,
        },
        {
          name: "Python",
          selected: false,
        },
        {
          name: "Date Analysis",
          selected: false,
        },
        {
          name: "C#",
          selected: false,
        },
      ],
      portfolio: [
        {
          provider: "Dribbble",
          link: "www.dribbble.com/chris",
        },
        {
          provider: "LinkedIn",
          link: "www.linkedin.com/in/chris",
        },
      ],
    },
    availability: {
      workType: "Full Time",
      paymentType: "Hyvv Direct Payment",
    },
    serviceDetails: {
      hourlyRate: 0,
      fixedProject: [],
      newService: {
        serviceTitle: "",
        servicePrice: 0,
        frequency: 0,
        taskDetails: [""],
      },
    },
  },
  setProfilePicture: (image: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.profilePicture = image;

    set({ freelancerProfileData });
  },
  removeProfilePicture: () => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.profilePicture = null;

    set({ freelancerProfileData });
  },
  setFirstName: (firstName: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.firstName = firstName;

    set({ freelancerProfileData });
  },
  setLastName: (lastName: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.lastName = lastName;

    set({ freelancerProfileData });
  },
  setCountry: (country: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.country = country;

    set({ freelancerProfileData });
  },
  setCurrentCity: (city: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.currentCity = city;

    set({ freelancerProfileData });
  },
  setContactNumber: (contactNumber: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.contactNumber = contactNumber;

    set({ freelancerProfileData });
  },
  setBirthday: (birthday: Date) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.birthday = birthday;

    set({ freelancerProfileData });
  },
  setSummary: (summary: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.summary = summary;

    set({ freelancerProfileData });
  },
  setEducationalInstitute: (educationalInstitute: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.educationalInstitute =
      educationalInstitute;

    set({ freelancerProfileData });
  },
  setStudyField: (studyField: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.studyField = studyField;

    set({ freelancerProfileData });
  },
  setStudyFrom: (from: Date) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.from = from;

    set({ freelancerProfileData });
  },
  setStudyTo: (to: Date) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.to = to;

    set({ freelancerProfileData });
  },
  addNewLanguage: (language: string, proficiency: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.languageProficiency.push({
      language: language,
      proficiency: proficiency,
    });

    set({ freelancerProfileData });
  },
  changeLanguageItem: (language: string, index: number) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.languageProficiency[index].language =
      language;

    set({ freelancerProfileData });
  },
  changeProficiencyItem: (proficiency: string, index: number) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.languageProficiency[index].proficiency =
      proficiency;

    set({ freelancerProfileData });
  },
  addWorkExperience: (
    title: string,
    companyName: string,
    location: string,
    country: string,
    currentRole: boolean,
    startDate: Date,
    endDate: Date,
    jobDescription: string
  ) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.workExperience.employmentHistory.push({
      companyName: companyName,
      position: title,
      location: location,
      country: country,
      startDate: startDate,
      endDate: endDate,
      currentRole: currentRole,
      jobDescription: jobDescription,
    });

    set({ freelancerProfileData });
  },
  addTopSkillItem: (key: number) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.workExperience.topSkills[key].selected = true;

    set({ freelancerProfileData });
  },
  removeTopSkillItem: (key: number) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.workExperience.topSkills[key].selected = false;

    set({ freelancerProfileData });
  },
  changePortfolioItem: (key: number, provider: ProviderType, link: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.workExperience.portfolio[key].provider = provider;
    freelancerProfileData.workExperience.portfolio[key].link = link;

    set({ freelancerProfileData });
  },
  addPortfolioItem: (provider: ProviderType, link: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.workExperience.portfolio.push({
      provider: provider,
      link: link,
    });

    set({ freelancerProfileData });
  },
  setWorkType: (type: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.availability.workType = type;

    set({ freelancerProfileData });
  },
  setPaymentMethod: (method: string) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.availability.paymentType = method;

    set({ freelancerProfileData });
  },
  setHourlyRate: (hourlyRate: number) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.serviceDetails.hourlyRate = hourlyRate;

    set({ freelancerProfileData });
  },
  createNewService: (
    serviceTitle: string,
    servicePrice: number,
    frequency: number,
    taskDetails: string[]
  ) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.serviceDetails.newService.serviceTitle = serviceTitle;
    freelancerProfileData.serviceDetails.newService.servicePrice = servicePrice;
    freelancerProfileData.serviceDetails.newService.frequency = frequency;
    freelancerProfileData.serviceDetails.newService.taskDetails = taskDetails;

    set({ freelancerProfileData });
  },
  setReviewData: (data: Array<Review>) => {
    const freelancerProfileData = get().freelancerProfileData;
    freelancerProfileData.personalInfo.reviews = data;

    set({ freelancerProfileData });
  },
});
