<script setup lang="ts">
import Work from './Work.vue'
import * as contentful from 'contentful'
import { computed, onMounted, ref } from 'vue'

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeWorkFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  github?: EntryFieldTypes.Symbol;
  service?: EntryFieldTypes.Symbol;
  serviceIcon?: EntryFieldTypes.AssetLink;
  blog?: EntryFieldTypes.Symbol;
  tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeWorkSkeleton = EntrySkeletonType<TypeWorkFields, "work">;
export type TypeWork<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeWorkSkeleton, Modifiers, Locales>;

type workType = {
  title: string
  description: string
  tags: string[]
  image?: string
  github?: string
  service?: string
  serviceIcon?: any
  blog?: string
}

const client = contentful.createClient({
  space: 'm53lxidg2b62',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})

const works = ref<workType[]>([])

let images: { [id: string]: string | undefined } = {}

// client.getAssets().then((assets) => {
//   assets.items.forEach(asset => {
//     images[asset.sys.id] = asset.fields.file?.url
//   });
// })

// client.getEntries<TypeWorkSkeleton>({
//   content_type: 'work',
//   // 'fields.serviceIcon[exists]':true
// }).then((entries) => {
//   entries.items.forEach((entry, i) => {
//     let work: workType

//     work = {
//       title: entry.fields.title,
//       description: entry.fields.description,
//       tags: entry.fields.tags,
//       blog: entry.fields.blog,
//       github: entry.fields.github,
//       service: entry.fields.github,
//     }
//     if (entry.fields.serviceIcon?.sys.id != undefined) {
//       work.serviceIcon = images[entry.fields.serviceIcon?.sys.id]
//     }
//     if (images[entry.fields.image.sys.id] != undefined) {
//       work.image = images[entry.fields.image.sys.id]
//     }
//     works.value.push(work)
//   });
// })

onMounted(() => {
  let assets = async () => {
    return await client.getAssets()
  }
  let entries = async () => {
    return await client.getEntries<TypeWorkSkeleton>({
      content_type: 'work'
    })
  }

  assets().then((assets) => {
    assets.items.forEach(asset => {
      images[asset.sys.id] = asset.fields.file?.url
    });
  })

  function makeWork(): void {
    entries().then((entries) => {
      entries.items.forEach(entry => {
        let work: workType

        work = {
          title: entry.fields.title,
          description: entry.fields.description,
          tags: entry.fields.tags,
          blog: entry.fields.blog,
          github: entry.fields.github,
          service: entry.fields.github,
        }
        if (entry.fields.serviceIcon?.sys.id != undefined) {
          work.serviceIcon = images[entry.fields.serviceIcon?.sys.id]
        }
        if (images[entry.fields.image.sys.id] != undefined) {
          work.image = images[entry.fields.image.sys.id]
        }
        works.value.push(work)
      })
    })
  }

  setTimeout(makeWork, 5)
})

function reload():void {
  
}



</script>

<template>
  <div v-for="work in works">
    <Work :title="work.title" :description="work.description" :image-file="work.image" :tags="work.tags" :blog="work.blog"
      :service="work.service" :service-icon="work.serviceIcon" :github="work.github" @no-icon="reload" />
  </div>
</template>