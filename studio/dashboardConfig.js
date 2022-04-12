export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6255e294764e7c0cc31edf88',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cqztwygv',
                  apiId: 'cf8acd16-c179-457e-8ef0-4b301ecff09a'
                },
                {
                  buildHookId: '6255e2953065d517dc563ddf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-11q33xrh',
                  apiId: 'd8bf57e8-f913-4745-8925-1cf722960430'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jstiger2469/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-11q33xrh.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
