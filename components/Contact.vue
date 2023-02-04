<template>
  <section class="section whitesmoke wf-section">
    <div class="container">
      <div class="projects-wrapper">
        <div class="rl_contact6_form-block w-form">
          <form
            id="wf-form-Contact"
            name="wf-form-Contact"
            data-name="Contact"
            redirect="/thanks-you"
            data-redirect="/thanks-you"
            method="get"
            class="rl_contact6_form"
          >
            <div class="rl_contact6_form-field-2col">
              <div class="rl_contact6_form-field-wrapper">
                <label for="First-Name" class="rl-field-label">First name</label
                ><input
                  type="text"
                  class="rl-form-input w-input"
                  maxlength="256"
                  name="First-Name"
                  data-name="First Name"
                  placeholder=""
                  id="First-Name"
                  required=""
                />
              </div>
              <div class="rl_contact6_form-field-wrapper">
                <label for="Last-Name" class="rl-field-label">Last name</label
                ><input
                  type="text"
                  class="rl-form-input w-input"
                  maxlength="256"
                  name="Last-Name"
                  data-name="Last Name"
                  placeholder=""
                  id="Last-Name"
                  required=""
                />
              </div>
            </div>
            <div class="rl_contact6_form-field-2col">
              <div class="rl_contact6_form-field-wrapper">
                <label for="Email" class="rl-field-label">Email</label
                ><input
                  type="email"
                  class="rl-form-input w-input"
                  maxlength="256"
                  name="Email"
                  data-name="Email"
                  placeholder=""
                  id="Email"
                  required=""
                />
              </div>
              <div class="rl_contact6_form-field-wrapper">
                <label for="Phone" class="rl-field-label">Phone number</label
                ><input
                  type="tel"
                  class="rl-form-input w-input"
                  maxlength="256"
                  name="Phone"
                  data-name="Phone"
                  placeholder=""
                  id="Phone"
                  required=""
                />
              </div>
            </div>
            <div class="rl_contact6_form-field-wrapper">
              <label for="Interest" class="rl-field-label"
                >Service of Interest</label
              ><select
                id="Interest"
                name="Interest"
                data-name="Interest"
                required=""
                class="rl-form-select-input w-select"
              >
                <option value="">Select one...</option>
                <option value="Residential">Residential Project</option>
                <option value="Commercial">Commercial Project</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="rl_contact6_form-field-wrapper">
              <label for="Contact-6-Email-4" class="rl-field-label"
                >Where is your project located?</label
              ><label for="Where" class="rl-field-label small"
                >City, Town, and/or Address</label
              ><input
                type="text"
                class="rl-form-input w-input"
                maxlength="256"
                name="Where"
                data-name="Where"
                placeholder=""
                id="Where"
                required=""
              />
            </div>
            <div class="rl_contact6_form-field-wrapper">
              <label for="Contact-6-Email-5" class="rl-field-label"
                >Timeline</label
              ><label for="Timeline" class="rl-field-label small"
                >Are you on a specific schedule? What is your preferred start
                date and competition date?</label
              ><input
                type="text"
                class="rl-form-input w-input"
                maxlength="256"
                name="Timeline"
                data-name="Timeline"
                placeholder=""
                id="Timeline"
                required=""
              />
            </div>
            <div class="rl_contact6_form-field-wrapper">
              <label for="Contact-6-Email-5" class="rl-field-label"
                >Scope of Work</label
              ><label for="Scope" class="rl-field-label small"
                >What spaces are involved in this project? Are renovations
                necessary? Would you like to utilize existing pieces?</label
              ><input
                type="text"
                class="rl-form-input w-input"
                maxlength="256"
                name="Scope"
                data-name="Scope"
                placeholder=""
                id="Scope"
                required=""
              />
            </div>
            <div class="rl_contact6_form-field-wrapper">
              <label for="Budget" class="rl-field-label">Budget</label
              ><select
                id="Budget"
                name="Budget"
                data-name="Budget"
                required=""
                class="rl-form-select-input w-select"
              >
                <option value="">Select one...</option>
                <option value="-50k">Under 50 000$</option>
                <option value="-80k">50 000$ to 80 000$</option>
                <option value="-120k">80 000$ - 120 000$</option>
                <option value="120k+">120 000$ +</option>
              </select>
            </div>
            <div class="rl_contact6_form-field-wrapper">
              <div class="rl_contact6_spacing-block-5"></div>
              <label for="Contact-2-Select" class="rl-field-label"
                >Have you worked with a designer before?</label
              >
              <div class="rl_contact6_spacing-block-6"></div>
              <div class="w-layout-grid rl-form-radio-2col">
                <label class="rl-form-radio w-radio">
                  <div
                    class="w-form-formradioinput w-form-formradioinput--inputType-custom rl-form-radio-icon w-radio-input"
                  ></div>
                  <input
                    type="radio"
                    id="Yes"
                    name="Experience"
                    value="Yes"
                    data-name="Experience"
                    style="opacity: 0; position: absolute; z-index: -1"
                  /><span for="Yes" class="rl-form-radio-label w-form-label"
                    >Yes</span
                  > </label
                ><label class="rl-form-radio w-radio">
                  <div
                    class="w-form-formradioinput w-form-formradioinput--inputType-custom rl-form-radio-icon w-radio-input"
                  ></div>
                  <input
                    type="radio"
                    id="No-2"
                    name="Experience"
                    value="No"
                    data-name="Experience"
                    style="opacity: 0; position: absolute; z-index: -1"
                  /><span for="No-2" class="rl-form-radio-label w-form-label"
                    >No</span
                  >
                </label>
              </div>
              <div class="rl_contact6_spacing-block-5"></div>
            </div>
            <div class="rl_contact6_form-field-wrapper">
              <label for="Message" class="rl-field-label">Message</label
              ><textarea
                id="Message"
                name="Message"
                maxlength="5000"
                data-name="Message"
                placeholder="Type your message..."
                required=""
                class="rl-form-text-area w-input"
              ></textarea>
            </div>
            <div
              id="w-node-f178fc64-36a2-eec0-00ea-5cab7687079f-0f9a21a0"
              class="rl_contact6_button-wrapper"
            >
              <div class="rl_contact6_spacing-block-7"></div>
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                id="w-node-f178fc64-36a2-eec0-00ea-5cab768707a1-0f9a21a0"
                class="button in-navbar w-button"
              />
            </div>
          </form>
          <div class="rl-success-message-2 w-form-done">
            <div class="rl-success-text">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div class="rl-error-message-2 w-form-fail">
            <div class="rl-error-text">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: Object,
  },
}
</script>
