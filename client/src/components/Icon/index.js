// import react library
import React from "react"
// import Decorative Icons
import {
  DoubleFace,
  PencilGear,
  Puzzle,
  Experimentation,
  RocketShip,
  Brain,
  Map,
  Agile,
  Sprint,
  Shapes,
} from "./decorativeIcons"
// import Utility Icons
import {
  LeftArrow,
  RightArrow,
  ThreeDots,
  Dot,
  Add,
  Attachment,
  Back,
  Cancel,
  CheckMark,
  Download,
  Dropdown,
  Forward,
  Info,
  Invalid,
  Play,
  Menu,
  Search,
  Setting,
  Share,
  Submit,
  SubmitFooter,
} from "./utilityIcons.js"
// import Display Icons
import {
  Blog,
  Calendar,
  Checklist,
  Contact,
  Identity,
  InnovationLearning,
  Location,
  Project,
  Question,
  Resource,
  Ruler,
  Support,
  TemplateLibrary,
  Quote,
} from "./displayIcons.js"
// array of all icon names
const ICONS = [
  "agile",
  "brain",
  "leftarrow",
  "rightarrow",
  "3dot",
  "dot",
  "dots",
  "add",
  "attachment",
  "back",
  "cancel",
  "checkmark",
  "download",
  "doubleface",
  "dropdown",
  "experimentation",
  "forward",
  "info",
  "invalid",
  "map",
  "menu",
  "play",
  "search",
  "setting",
  "share",
  "submit",
  "blog",
  "calendar",
  "checklist",
  "contact",
  "identify",
  "innovationlearning",
  "location",
  "pencilgear",
  "project",
  "puzzle",
  "question",
  "resource",
  "rocketship",
  "sprint",
  "ruler",
  "shapes",
  "support",
  "templatelibrary",
  "quote",
  "submitfooter",
]

/**
 * @param {string} name the name or type of icon
 * @param {string} className the class name for the svg element
 * @param {string} color changes the color of the icon via the fill property of the svg element. NOTE - color must be named after one of the colors from the COLORS array
 * @param {string} altcolor only present for icons that have a background color within the svg ie ruler. Controls the background color within the svg element.
 * @param {string} backgroundColor controls the background color of the svg as a whole
 * @param {string} height height of icon
 * @param {string} width width of icon
 */
const Icon = ({
  name = "add",
  className = "",
  color = "blue",
  altcolor = "pearlwhite",
  backgroundColor,
  height = "48",
  width = "48",
  iconAltBackgroundColor = "nemoorange25",
}) => {
  name = name.toLowerCase()
  if (ICONS.includes(name)) {
    switch (name) {
      case "leftarrow":
        return (
          <LeftArrow
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "rightarrow":
        return (
          <RightArrow
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "3dot":
        return (
          <ThreeDots
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "dot":
        return (
          <Dot
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "add":
        return (
          <Add
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "doubleface":
        return (
          <DoubleFace
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "experimentation":
        return (
          <Experimentation
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "agile":
        return (
          <Agile
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "attachment":
        return (
          <Attachment
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "back":
        return (
          <Back
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "brain":
        return (
          <Brain
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "cancel":
        return (
          <Cancel
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "checkmark":
        return (
          <CheckMark
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "download":
        return (
          <Download
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "dropdown":
        return (
          <Dropdown
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "forward":
        return (
          <Forward
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "info":
        return (
          <Info
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "invalid":
        return (
          <Invalid
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "play":
        return (
          <Play
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "pencilgear":
        return (
          <PencilGear
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "puzzle":
        return (
          <Puzzle
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "map":
        return (
          <Map
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "menu":
        return (
          <Menu
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "rocketship":
        return (
          <RocketShip
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "search":
        return (
          <Search
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "setting":
        return (
          <Setting
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "shapes":
        return (
          <Shapes
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "share":
        return (
          <Share
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "sprint":
        return (
          <Sprint
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            iconAltBackgroundColor={iconAltBackgroundColor}
          />
        )
      case "submit":
        return (
          <Submit
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "blog":
        return (
          <Blog
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "calendar":
        return (
          <Calendar
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "checklist":
        return (
          <Checklist
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "contact":
        return (
          <Contact
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "identify":
        return (
          <Identity
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "innovationlearning":
        return (
          <InnovationLearning
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "location":
        return (
          <Location
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "project":
        return (
          <Project
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "question":
        return (
          <Question
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "resource":
        return (
          <Resource
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "ruler":
        return (
          <Ruler
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            altcolor={altcolor}
          />
        )
      case "support":
        return (
          <Support
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "templatelibrary":
        return (
          <TemplateLibrary
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "quote":
        return (
          <Quote
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      case "submitfooter":
        return (
          <SubmitFooter
            className={className}
            name={name}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        )
      default:
        console.log("icon: " + name + "does not exist")
        return <div />
    }
  } else {
    console.log("icon: " + name + " does not exist")
    return <div />
  }
}

export default Icon
