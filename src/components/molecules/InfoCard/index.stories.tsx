import React from 'react';
import { ArrowRightCircle } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { InfoCard } from '.';

const meta: Meta<typeof InfoCard> = {
  title: 'molecules/InfoCard',
  component: InfoCard,
  args: {
    icon: <ArrowRightCircle />,
    title: '면접 제안',
    date: '2023.01.25',
    table: {
      '제안하는 이': '코드스테이츠',
      포지션: '프론트엔드 개발자',
      '제안받는 사람': '이희민',
    },
    children: `안녕하세요.\n이정수 플리토 대표가 24일 서울 을지로 페럼타워에서 메트로미디어 주최로 열린 '2021 뉴테크놀로지 포럼'에 참석해 강연을 하고 있다. / 손진영기자 가 24일 서울 을지로 페럼타워에서 메트로미디어 주최로 열린 '2021 뉴테크놀로지 포럼'에 참석해 강연을 하고 있다. / 손진영기자 가 24일 서울 을지로 페럼타워에서 메트로미디어 주최로 열린 '2021 뉴테크놀로지 포럼'에 참석해 강연을 하고 있다.`,
  },

  decorators: [
    (Story) => (
      <article
        style={{
          width: '750px',
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {};
