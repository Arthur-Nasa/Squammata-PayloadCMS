import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { revalidateDelete, revalidatePage } from './Pages/hooks/revalidateBlock'
import { populatePublishedAt } from '../hooks/populatePublishedAt'

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blockReferences: [
        'content', 
        'mediaBlock', 
        'archive', 
        'formBlock', 
        'hero_one', 
        'hero_two',
        'hero_three',
        'hero_four',
        'hero_five', 
        'about_us',
        'about_us_two', 
        'about_us_three', 
        'about_us_four', 
        'counters',
        'counters_two',
        'services',
        'services_two',
        'services_three',
        'services_four',
        'call_to_action', 
        'team_block', 
        'call_to_action_2', 
        'subscribe', 
        'portfolio',
        'portfolio_two', 
        'prices_block',
        'prices_two',
        'intro',
        'portfolio_grid',
        'about_project',
        'about_service',
        'about_team',
        'features',
        'features_two',
        'faq',
      ],
      blocks: [],
      required: true,
    },
  ],
  labels: {
    plural: 'Reusable Contents',
    singular: 'Reusable Content',
  },
  versions: {
    drafts: {
      autosave: false,
      schedulePublish: true,
    },
    maxPerDoc: 1,
  },
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
}