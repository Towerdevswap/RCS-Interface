/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import path from 'path'
import fs from 'fs'
import farm1 from '../constants/1'
import farm5 from '../constants/5'
import farm97 from '../constants/97'
import farm56 from '../constants/56'
import farm32520 from '../constants/32520'
import farm1116 from '../constants/1116'

import lpHelpers1 from '../constants/priceHelperLps/1'
import lpHelpers5 from '../constants/priceHelperLps/5'
import lpHelpers97 from '../constants/priceHelperLps/97'
import lpHelpers56 from '../constants/priceHelperLps/56'
import lpHelpers32520 from '../constants/priceHelperLps/32520'
import lpHelpers1116 from '../constants/priceHelperLps/1116'

const chains = [
  [1, farm1, lpHelpers1],
  [5, farm5, lpHelpers5],
  [56, farm56, lpHelpers56],
  [97, farm97, lpHelpers97],
  [1116, farm1116, lpHelpers1116],
  [32520, farm32520, lpHelpers32520],
]

export const saveList = async () => {
  console.info('save farm config...')
  try {
    fs.mkdirSync(`${path.resolve()}/lists`)
    fs.mkdirSync(`${path.resolve()}/lists/priceHelperLps`)
  } catch (error) {
    //
  }
  for (const [chain, farm, lpHelper] of chains) {
    console.info('Starting build farm config', chain)
    const farmListPath = `${path.resolve()}/lists/${chain}.json`
    const stringifiedList = JSON.stringify(farm, null, 2)
    fs.writeFileSync(farmListPath, stringifiedList)
    console.info('Farm list saved to ', farmListPath)
    const lpPriceHelperListPath = `${path.resolve()}/lists/priceHelperLps/${chain}.json`
    const stringifiedHelperList = JSON.stringify(lpHelper, null, 2)
    fs.writeFileSync(lpPriceHelperListPath, stringifiedHelperList)
    console.info('Lp list saved to ', lpPriceHelperListPath)
  }
}

saveList()
