<template>
  <div class="container">
      <app-header
        link="/Main"
        >
        <span slot="title">
            <i class="fa fa-calendar"></i>
            Calendar
        </span>
      </app-header>
      <transition
        appear
        enter-active-class="animated zoomIn"
      >
        <div class="content-container pb-5">
          <div class="day-container "
            v-for="(dailyAttendance, i ) in days"
            :key="i"
          >
            <h3 class="text-center py-3 font-weight-bold">
              {{dailyAttendance.dayText}}
            </h3>
            <calendar-badge
                class="mx-3"
                v-for="(lecture, k) in dailyAttendance.lectures"
                :key="k + 100"
                :label="lecture.title"
                :content="lecture.description"
                >
              <span slot="time" class="float-right d-inline-block font-weight-bold">
                {{ lecture.time }}
              </span>  
            </calendar-badge>
            <calendar-badge
                class="mx-3"
                v-for="(section, k) in dailyAttendance.sections"
                color="#7f449b9e"
                :key="k * + 200"
                :label="section.title"
                :content="section.description"
                >
              <span slot="time" class="float-right d-inline-block font-weight-bold">
                {{ section.time }}
              </span>  
            </calendar-badge>
          </div>
        </div>
      </transition>
  </div>
</template>
<script>
import Header from './Networking/Header.vue';
import badge from './Partials/badge'

export default {
  components: {
      appHeader: Header,
      calendarBadge: badge   
  },
  data: function() {
    return {
      days: [
        {
          dayText: "Satureday",
          lectures: [
            {
              id: "1",
              title: "lecture One",
              time: "8:30",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
            },
            {
              id: "2",
              time: "10:10",              
              title: "lecture Two",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
            },
            {
              id: "3",
              title: "lecture Three",
              time: "11:50",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
            }
          ],
          sections: [
            {
              id: "3",
              title: "Section One",
              time: "13:20",              
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
            }
          ]
        },
        {
          dayText: "Sunday",
          lectures: [
            {
              id: "1",
              title: "lecture One",
              time: "08:30",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
            },
            {
              id: "2",
              time: "10:10",
              title: "lecture Two",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
            }
          ],
          sections: [
            {
              id: "3",
              title: "Section One",
              time: "11:50",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
            },
            {
              id: "3",
              title: "Section Two",
              time: "13:20",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
            }
          ]
        }

      ]
    }
  },
  // computed: {
  //   dailyAttendances: function() {
  //     var arr = [];
  //     this.days.forEach(day => {
  //       var x = {};
  //       x.dayText = day.day,
  //       x.attendances = day.lectures.concat(day.sections);
  //       arr.push(x);
  //     });
  //     return arr;
  //   }
  // }
}
</script>
<style lang="scss" scoped>
    
</style>
