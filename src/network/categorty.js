import { request } from "./request"

export function getCetagory() {
    return request({
      url:"/category"
    })
  }