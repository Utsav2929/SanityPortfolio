export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Name of the person or title of the resume',
      },
      {
        name: 'pdf',
        title: 'PDF',
        type: 'file',
        options: {
          accept: '.pdf',
        },
        description: 'Upload the resume PDF file here',
      },
 
    ],
  };