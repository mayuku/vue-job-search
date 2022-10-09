import { nextTick } from "vue"; //refresh
import { mount } from "@vue/test-utils";

import HeadlineSection from "@/components/HeadlineSection";

describe("HeadlineSection", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductory action verb", () => {
    const wrapper = mount(HeadlineSection);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at a consistent interval", () => {
    mount(HeadlineSection);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb at a consistent interval", async () => {
    const wrapper = mount(HeadlineSection);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", () => {
    const wrapper = mount(HeadlineSection);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
