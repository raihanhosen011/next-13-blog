// Author types
export type AuthorTypes = {
   name : string, 
   username : string,
   id: number 
}

// Single blog types
export type BlogTypes = {
   title : string,
   description : string,
   createDate : string,
   author : Array<AuthorTypes>
}

// Home page Feed prop types
export type FeedPropTypes = {
   title : string,
   data  : Array<BlogTypes>
}