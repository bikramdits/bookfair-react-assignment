# Reactjs - Ant+GraphQl Architecture

This project aims at providing you with ready-to-use ant+graphql architecture for using it in your next project.

### Index

- [Installation](#installation)
- [Thrid Party modules](#third-party-modules)
- [Folder Structure](#folder-structure)
- [Theming](#theming)
- [Elements](#elements)
  - [Input](#input)
  - [Phone Number Input](#phone-number-input)
  - [Button](#button)
  - [Image Picker](#image-picker)
  - [Select](#select)
  - [Text Area](#text-area)
- [Modal](#modal)
- [Routing](#routing)
- [Services](#services)
- [MultiLingual](#multilingual)
- [Environment Variables](#environment-variables)
- [Utils](#utils)

## Installation

To get started with this project first of all, clone this repo(preferebly using ssh) using the command below:

`git@github.com:saddamditswins/Ant_Graphql_Architecture.git`

After the cloning is done make sure you have `nodejs` and `npm` working on your system, then follow the steps below:

- Go tho the root of the project and install all the dependecies using -  
   `npm install`
- After installing the dependencies successfully. You can run the development server using -  
   `npm run start-dev`
- The project is now running at localhost:3000 if the port is empty.

## Third Party modules

The default third-party modules used in this project are listed below -

- [antd](https://ant.design/)
- [@apollo/client](https://www.apollographql.com/docs/react/)
- [cleave.js](https://nosir.github.io/cleave.js/)
- [dayjs](https://day.js.org/)
- [env-cmd](https://www.npmjs.com/package/env-cmd)
- [graphql](https://graphql.org/)
- [react-router-dom](https://reactrouter.com/en/main)
- [i18next](https://www.i18next.com/)
- [i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector)
- [i18next-xhr-backend](https://www.npmjs.com/package/i18next-xhr-backend)
- [styled-components](https://styled-components.com/)
- [typescript](https://www.typescriptlang.org/)

All the installed modules/dependencies can be seen anytime in `package.json` file.

## Folder Structure

The folder structure of the project is as follows -

<pre>
📦 Ant_Graphql_Architecure  
 ┣ 📂 node_modules   
 ┣ 📂 environments  
 ┣ 📂 public  
 ┣ 📂 src  
   ┣ 📂 assets  
     ┣ 📂 images  
     ┗ 📂 translation
       ┣ 📂 locale
         ┣ 📂 en
           ┗ 📜 translation.json
         ┗ 📂 hi 
           ┗ 📜 translation.json
       ┣ 📜 i18n.ts
       ┗ 📜 resources.ts
   ┣ 📂 components
     ┣ 📂 elements
       ┣ 📂 button
         ┗ 📜 index.ts
       ┣ 📂 date-picker
         ┗ 📜 index.ts
       ┣ 📂 image-picker
         ┗ 📜 index.ts
       ┣ 📂 input
         ┗ 📜 index.ts
       ┣ 📂 custom-table
         ┗ 📜 index.ts
       ┣ 📂 phone-number-input
         ┗ 📜 index.ts
       ┣ 📂 select
         ┗ 📜 index.ts
       ┣ 📂 textarea
         ┗ 📜 index.ts
       ┗ 📜 index.ts 
     ┣ 📂 layout
       ┗ 📜 index.ts
     ┗ 📂 modals  
       ┣ 📂 base-modal
         ┗ 📜 index.ts
       ┣ 📂 dashboard-modal
         ┗ 📜 index.ts
       ┗ 📜 index.ts
   ┣ 📂 hooks  
   ┣ 📂 models
     ┣ 📂 enums
       ┗ 📜 roles.ts
     ┗ 📂 interfaces
       ┣ 📜 ibutton-props.ts
       ┣ 📜 idatepicker-props.ts
       ┣ 📜 iinput-props.ts
       ┣ 📜 imodal-props.ts
       ┣ 📜 iphonenumber-props.ts
       ┣ 📜 iselect-props.ts
       ┣ 📜 itable-props.ts
       ┣ 📜 itextarea-props.ts
       ┗ 📜 itheme.ts
   ┣ 📂 pages
     ┣ 📂 home
       ┗ 📜 index.ts  
   ┣ 📂 services
     ┗ 📂 graphql
       ┣ 📂 mutation
       ┗ 📂 query
   ┣ 📂 utils
     ┗ 📂 config
       ┣ 📜 env.config.ts 
       ┗ 📜 index.ts 
   ┣ 📜 App.css  
   ┣ 📜 App.tsx   
   ┣ 📜 index.tsx
   ┣ 📜 private-route.tsx
   ┣ 📜 theme.ts
 ┃ ┗ 📜 index.js  
 ┣ 📜 .gitignore  
 ┣ 📜 package-lock.json  
 ┗ 📜 package.json  
 </pre>

## Theming

If you want chage the primary color of the theme you can do so from `src/theme.ts` file. For additional information visit: [https://ant.design/docs/react/customize-theme](https://ant.design/docs/react/customize-theme)

## Elements

This project contains may ready-to-use highly costomizable components. All of them are listed below with their usage guide.

Any element can accessed using 
`"components/elements/{element-name}/index.tsx"` file

### Input

This is a customizable input field.

- Input element can be imported as:  
  `import {Input} from 'components/elements'`  
  or  
  `import Input from 'components/elements/input'`
- Props/Options

  | Prop  |  Type  |
  | ----- | -------| 
  | label | string |
  | name  | string |
  | requiredMessage  | string |
  | required  | Boolean |
  | type  | string |
  | margin  | string |
  | padding  | string |
  | width  | string |
  | className  | string |
  | pattern  | string |
  | regExpMessage  | string |
  | placeholder  | string |
  | formMargin  | string |
  | initialvalue  | string |
  | value  | string |
  | onChange  | Function |
  | restProps  | any |
  | onFocus  | Function |
  | fieldKey  | number/string |
  | disabled  | boolean |
  | error  | string |

- This element can be used as any other component in reactjs: `<Input ...props/>`

### Phone Number Input
This is a customizable input field for phone numbers. The format of the phone numbers can be changed using cleave.js import in the `components/elements/phone-number-input/index.tsx` file.

- Phone Number Input element can be imported as:  
  `import {PhoneNumberInput} from 'components/elements'`  
  or  
  `import PhoneNumberInput from 'components/elements/phone-number-input'`
- Props/Options

  | Prop  |  Type  |
  | ----- | -------| 
  | label | string |
  | height  | string |
  | width  | string |
  | footer  | string |
  | xswidth  | string |
  | type  | string |
  | placeholder  | string |
  | value  | string |
  | onChange  | Function |
  | readOnly  | string |
  | required  | string |
  | name  | string |
  | pattern  | string |
  | className  | string |
  | margin  | string |
  | padding  | string |
  | regExpMessage  | string |
  | reuiredMessage  | string |
  | restProps  | any |
  | fieldKey  | string |
  | onFocus  | string |
  | initialValue  | string |

- This element can be used as any other component in reactjs: `<PhoneNumberInput ...props/>`

### Button
This is a basic button component which can styled using styled-componets right from the source file.

- Button element can be imported as:  
  `import {BasicButton} from 'components/elements'`  
  or  
  `import BasicButton from 'components/elements/button'`
- Props/Options

  | Prop  |  Type  |
  | ----- | -------| 
  | children | ReactNode/ReactElement/JSX.Element |
  | type  | "link", "text", "default", "primary", "ghost" ,"dashed"
  | onClick | MouseEventHandler&lt;HTMLElement>; |

- This element can be used as any other component in reactjs: `<BasicButton ...props/>`

### Image Picker
This is a multiple image uploader with image preview.

- Image Picker element can be imported as:  
  `import {ImagePicker} from 'components/elements'`  
  or  
  `import ImagePicker from 'components/elements/image-picker'`
- Props/Options

  | Prop  |  Type  |
  | ----- | -------| 
  | onUpload | Function |

- This element can be used as any other component in reactjs: `<ImagePicker ...props/>`

### Select
This is an option selector element.

- Select element can be imported as:  
  `import {Select} from 'components/elements'`  
  or  
  `import Select from 'components/elements/select'`
- Props/Options

  | Prop  |  Type  |
  | ----- | -------| 
  | label | string |
  | name  | string |
  | onChange  | value: string, option: DefaultOptionType | 
  | margin  | string |
  | padding  | string |
  | option  | Array<string> |
  | required  | Boolean |
  | className  | string |
  | placeholder  | string |
  | required  | boolean |
  | pattern  | string |
  | requiredMessage  | string |
  | mode  | "multiple", "tags" |
  | value  | string |
  | initialvalue  | string |
  | value  | string |
  | onDeselect  | any |
  | onSelect  | any |
  | defaultValue  | string |
  | initialValue  | string |
  | restProps  | any |
  | fieldKey  | number/string |

- This element can be used as any other component in reactjs: `<Select ...props/>`

### Text Area
This is a textarea element.

- TextArea element can be imported as:  
  `import {TextAreaB} from 'components/elements'`  
  or  
  `import TextAreaB from 'components/elements/textarea'`
- Props/Options

  | Prop  |  Type  |
  | ----- | -------| 
  | label | string |
  | name  | string |
  | onChange  | React.ChangeEvent&lt;HTMLTextAreaElement> | 
  | type  | string |
  | margin  | string |
  | padding  | string |
  | required  | Boolean |
  | requiredMessage  | string |
  | width  | string |
  | value  | string |
  | className  | string |
  | disabled  | boolean |
  | initialValue  | string |
  | restProps  | any |
  | fieldKey  | number/string |
  | placeholder  | string |
  | maxLength  | number |
  | showCount  | boolean |

- This element can be used as any other component in reactjs: `<TextAreaB ...props/>`

## Modal
Modals can be added to any component or page by 
- Importing the base modal to the component using -  
 `import {BaseModal} from 'components/elements'`  
  or  
  `import BaseModal from 'components/elements/base-modal'`

    - Base modal takes the following props:  

        | Prop  |  Type  |
        | ----- | -------| 
        | title | string |
        | content | JSX.Element |
        | showModal | boolean |
        | setShowModal | Function |
        | footer | boolean |

    After that you have to create the modal body in a different component(eg. `components/modals/dashboard-modal/index.tsx`) and that component should be passed inside the content prop.

- State(open/close) can be passed inside the showModal & setShowModal props.


## Routing
The routing for the application is directly managed inside the `App.tsx` file.
There is a saperate `private-route.tsx` file which manages the private and role based routing.

Learn more about react routing here: [React Router Dom](https://reactrouter.com/en/main)

## Services
The `services` folder contains graphql folder which containts a `client.ts` file which the connection to the backend API and also `mutation` & `query` folder which will have all the graphql mutations and queries.

This `services` folder can be modified to be used for a REST API as well.

## MultiLingual
This project also has multilingual support through a library called `i18next`.  
All the transaltion related files can be found under `assets/translation`.
Any new language can be added by adding a new folder inside `translation` folder for eg. `hi` for Hindi which will host a `translation.json` file with all the translations.

Learn more here: [https://react.i18next.com/](https://react.i18next.com/)

## Environment Variables
All the environment variables are in the root directory inside `environment` folder. It has support for various environments such as `development`, `qa` and `production`.

## Utils  
`utils` folder can be used to host all the utilities folders and files.

