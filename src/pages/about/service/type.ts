/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-17 08:59:42
 * @FilePath: \umiProject\src\pages\about\service\type.ts
 * @Description:关于我们模块接口类型定义
 */
type FirstInformationIconDto = {
  title: string
  url: string
}

type FirstInformationDto = {
  firstInformationIconDtos: FirstInformationIconDto[]
  subTitle: string
  title: string
}

type SecondInformationDto = {
  leaderIntroductionDetail: string
  leaderIntroductionTitle: string
  platformIntroductionDetail: string
  platformIntroductionTitle: string
  url: string
}

type ThirdInformationDto = {
  latitude: string
  longitude: string
  subTitle: string
  title: string
  url: string
}

type AboutUsResponse = {
  firstInformationDto: Partial<FirstInformationDto>
  secondInformationDto: Partial<SecondInformationDto>
  thirdInformationDto: Partial<ThirdInformationDto>
}

export type { AboutUsResponse }
