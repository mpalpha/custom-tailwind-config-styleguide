import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import DemoPanel from '@/components/DemoPanel.vue';
import BackgroundColors from '@/components/BackgroundColors.vue';
import BorderColors from '@/components/BorderColors.vue';
import BorderRadius from '@/components/BorderRadius.vue';
import BorderWidths from '@/components/BorderWidths.vue';
import FontWeights from '@/components/FontWeights.vue';
import Heights from '@/components/Heights.vue';
import Leadings from '@/components/Leadings.vue';
import Margins from '@/components/Margins.vue';
import Opacities from '@/components/Opacities.vue';
import OtherWidths from '@/components/OtherWidths.vue';
import Paddings from '@/components/Paddings.vue';
import PercentageWidths from '@/components/PercentageWidths.vue';
import Shadows from '@/components/Shadows.vue';
import TextColors from '@/components/TextColors.vue';
import TextSizes from '@/components/TextSizes.vue';
import Trackings from '@/components/Trackings.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(App);
});

afterEach(() => {
  wrapper.destroy();
});

describe('DemoPanel.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(DemoPanel)).toBe(true);
  });
});

describe('BackgroundColors.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(BackgroundColors)).toBe(true);
  });
});

describe('BorderColors.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(BorderColors)).toBe(true);
  });
});

describe('BorderRadius.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(BorderRadius)).toBe(true);
  });
});

describe('BorderWidths.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(BorderWidths)).toBe(true);
  });
});

describe('FontWeights.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(FontWeights)).toBe(true);
  });
});

describe('Heights.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(Heights)).toBe(true);
  });
});

describe('Leadings.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(Leadings)).toBe(true);
  });
});

describe('Margins.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(Margins)).toBe(true);
  });
});

describe('Opacities.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(Opacities)).toBe(true);
  });
});

describe('OtherWidths.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(OtherWidths)).toBe(true);
  });
});

describe('Paddings.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(Paddings)).toBe(true);
  });
});

describe('PercentageWidths.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(PercentageWidths)).toBe(true);
  });
});

describe('Shadows.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(Shadows)).toBe(true);
  });
});

describe('TextColors.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(TextColors)).toBe(true);
  });
});

describe('TextSizes.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(TextSizes)).toBe(true);
  });
});

describe('Trackings.vue', () => {
  test('exists', () => {
    expect(wrapper.contains(Trackings)).toBe(true);
  });
});
