import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test('Авто сценарий 1 @allure.id:1', async ({ page }) => {
  await allure.owner("kostya");
  await allure.step("Авто шаг 1", async () => {});
  await allure.step("Авто шаг 2", async () => {});
  await allure.step("Авто шаг 3", async () => {});
  await allure.step("Авто шаг 4", async () => {});
});

test('Авто сценарий 2 @allure.id:2', async ({ page }) => {
  await allure.owner("kostya");
  await allure.step("Авто шаг 1", async () => {});
  await allure.step("Авто шаг 2", async () => {});
  await allure.step("Авто шаг 3", async () => {});
});
